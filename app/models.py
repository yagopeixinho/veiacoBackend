from app import db
from werkzeug.security import check_password_hash, generate_password_hash
from passlib.apps import custom_app_context as pwd_context
import jwt
from datetime import datetime, timedelta
import base64
import os
import datetime

# Association Tables
veiaco_has_debt = db.Table('Veiaco_has_Debt',
                           db.Column('veiaco_id', db.Integer, db.ForeignKey(
                               'veiaco.id'), primary_key=True),
                           db.Column('debt_id', db.Integer, db.ForeignKey(
                               'debt.id'), primary_key=True)
                           )


class User(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(64), index=True, unique=True, nullable=False)
    email = db.Column(db.String(120), index=True, unique=True, nullable=False)
    password_hash = db.Column(db.String(128))
    created_on = db.Column(db.DateTime, server_default=db.func.now())
    updated_on = db.Column(
        db.DateTime, server_default=db.func.now(), server_onupdate=db.func.now())

    # Relationships fields

    # Relationships
    veiaco = db.relationship('Veiaco', backref='user')
    schedule = db.relationship('Schedule', backref='user')

    def __repr__(self):
        return '<User {}, ID: {}>'.format(self.name, self.id)

    def to_dict(self):
        return {"id": self.id, "name": self.name, "email": self.email}

    def hash_pasword(self, password):
        self.password_hash = pwd_context.encrypt(password)

    def verify_password(self, password):
        return pwd_context.verify(password, self.password_hash)


class Veiaco(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(20), index=True, nullable=False)
    email = db.Column(db.String(120), index=True)
    phone = db.Column(db.String(40))
    occupation = db.Column(db.String(40))
    created_on = db.Column(db.DateTime, server_default=db.func.now())
    updated_on = db.Column(
        db.DateTime, server_default=db.func.now(), server_onupdate=db.func.now())

    # Relationships fields
    user_id = db.Column(db.Integer, db.ForeignKey('user.id'))

    # Relationships
    veiaco_has_debt = db.relationship(
        'Debt', secondary=veiaco_has_debt, lazy='subquery', backref=db.backref('Debt', lazy=True))
    schedule = db.relationship('Schedule', backref='veiaco')

    def __repr__(self):
        return '<Veiaco {}, ID: {}>'.format(self.name, self.id)

    def to_dict(self):
        return {"id": self.id, "name": self.name, "email": self.email, "phone": self.phone, "occupation": self.occupation, "user_id": self.user_id}

    def from_dict(self, data):
        for field in ['name', 'email', 'phone', 'occupation', 'created_on', 'updated_on']:
            if field in data:
                setattr(self, field, data[field])


class Debt(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(120), index=True)
    value = db.Column(db.Float)
    status = db.Column(db.Boolean)
    date = db.Column(db.DateTime, default=False)
    created_on = db.Column(db.DateTime, server_default=db.func.now())
    updated_on = db.Column(
        db.DateTime, server_default=db.func.now(), server_onupdate=db.func.now())

    # Relationships fields
    category_id = db.Column(db.Integer, db.ForeignKey(
        'category.id'), nullable=False)

    # Relationships

    def __repr__(self):
        return '<Debt {}, ID: {}>'.format(self.name, self.id)

    def to_dict(self):
        category = Category.query.filter_by(id=self.category_id).first()

        return {'id': self.id, 'name': self.name, 'status': self.status, 'value': self.value, 'category': category.to_dict(), "date": self.date.strftime("%Y-%m-%d %H:%M:%S"), 'created_on': self.created_on.strftime("%Y-%m-%d %H:%M:%S")}


class Category(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(120), index=True)
    created_on = db.Column(db.DateTime, server_default=db.func.now())
    updated_on = db.Column(
        db.DateTime, server_default=db.func.now(), server_onupdate=db.func.now())

    # Relationships fields

    # Relationships
    debt = db.relationship('Debt', backref='category', lazy=True)

    def __repr__(self):
        return '<Category {}, ID: {}>'.format(self.name, self.id)

    def to_dict(self):
        return {'id': self.id, 'name': self.name}


class Schedule(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    start_time = db.Column(db.DateTime)
    end_time = db.Column(db.DateTime)
    subject = db.Column(db.String(50))

    # Relationships fields
    veiaco_id = db.Column(db.Integer, db.ForeignKey('veiaco.id'))
    user_id = db.Column(db.Integer, db.ForeignKey('user.id'))

    def __repr__(self):
        return '<Schedule {}, ID: {}'.format(self.subject)

    def to_dict(self):
        return {'id': self.id,
                'veiaco_id': self.veiaco_id,
                'user_id': self.user_id,
                'end_time': self.end_time.strftime("%Y-%m-%d %H:%M:%S"),
                'start_time': self.start_time.strftime("%Y-%m-%d %H:%M:%S"),
                'subject': self.subject
                }

    def from_dict(self, data):
        for field in ['start_time', 'end_time', 'subject', 'veiaco_id', 'user_id']:
            if field in data:
                setattr(self, field, data[field])
