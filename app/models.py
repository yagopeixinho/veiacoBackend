from app import db

# Association Tables
veiaco_has_debt = db.Table('Veiaco_has_Debt',
    db.Column('veiaco_id', db.Integer, db.ForeignKey('veiaco.id'), primary_key=True),
    db.Column('debt_id', db.Integer, db.ForeignKey('debt.id'), primary_key=True)
)

class User(db.Model):    
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(64), index=True, unique=True, nullable=False)
    email = db.Column(db.String(120), index=True, unique=True, nullable=False)
    password = db.Column(db.String(128))
    
    # Relationships fields

    # Relationships
    veiaco = db.relationship('Veiaco', backref='user')

    def __repr__(self):
        return '<User {}, ID: {}>'.format(self.name, self.id)
    
    def to_dict(self):
        return {"id": self.id, "name": self.name, "email": self.email}
    
    
class Veiaco(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(20), index=True, nullable=False)
    email = db.Column(db.String(120), index=True)
    phone = db.Column(db.String(40))
    
    # Relationships fields
    user_id = db.Column(db.Integer, db.ForeignKey('user.id'))
    
    # # Relationships
    veiaco_has_debt = db.relationship('Debt', secondary=veiaco_has_debt, lazy='subquery', backref=db.backref('Debt', lazy=True))
    
    def __repr__(self):
        return '<Veiaco {}, ID: {}>'.format(self.name, self.id)
    

class Debt(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(120), index=True)
    value = db.Column(db.Float)
    open = db.Column(db.Boolean)
    
    # Relationships fields
    category_name = db.Column(db.String, db.ForeignKey('category.name'), nullable=False)

    # Relationships

    
    def __repr__(self):
        return '<Debt {}, ID: {}>'.format(self.name, self.id)
    

class Category(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(120), index=True)
    
    # Relationships fields

    # Relationships
    debt = db.relationship('Debt', backref='category', lazy=True)
    