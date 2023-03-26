from app import db
from werkzeug.security import check_password_hash, generate_password_hash
from passlib.apps import custom_app_context as pwd_context
import jwt
from datetime import datetime, timedelta
import base64
import os

# Association Tables
veiaco_has_debt = db.Table('Veiaco_has_Debt',
    db.Column('veiaco_id', db.Integer, db.ForeignKey('veiaco.id'), primary_key=True),
    db.Column('debt_id', db.Integer, db.ForeignKey('debt.id'), primary_key=True)
)

class User(db.Model):    
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(64), index=True, unique=True, nullable=False)
    email = db.Column(db.String(120), index=True, unique=True, nullable=False)
    password_hash = db.Column(db.String(128))

    # Relationships fields

    # Relationships
    veiaco = db.relationship('Veiaco', backref='user')

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
    
    # Relationships fields
    user_id = db.Column(db.Integer, db.ForeignKey('user.id'))
    
    # # Relationships
    veiaco_has_debt = db.relationship('Debt', secondary=veiaco_has_debt, lazy='subquery', backref=db.backref('Debt', lazy=True))
    
    def __repr__(self):
        return '<Veiaco {}, ID: {}>'.format(self.name, self.id)
    
    def to_dict(self):
        return {"id": self.id, "name": self.name, "email": self.email, "phone": self.phone, "occupation": self.occupation, "user_id": self.user_id}
    
    

class Debt(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(120), index=True)
    value = db.Column(db.Float)
    open = db.Column(db.Boolean)
    
    # Relationships fields
    category_id = db.Column(db.String, db.ForeignKey('category.id'), nullable=False)

    # Relationships

    
    def __repr__(self):
        return '<Debt {}, ID: {}>'.format(self.name, self.id)
    
    def to_dict(self):
        return {'id': self.id, 'name': self.id, 'status': self.open, 'value': self.value}
    

class Category(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(120), index=True)
    
    # Relationships fields

    # Relationships
    debt = db.relationship('Debt', backref='category', lazy=True)
    
    def __repr__(self):
        return '<Category {}, ID: {}>'.format(self.name, self.id)

    def to_dict(self):
        return {'id': self.id, 'name': self.name}
    