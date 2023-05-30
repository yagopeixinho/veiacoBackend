import os

basedir = os.path.abspath(os.path.dirname(__file__))

class Config:
    # Database Options
    SQLALCHEMY_DATABASE_URI = 'mysql://peixinho:peixinho@codefast.cluster-cjb1qt4dgm8p.us-east-1.rds.amazonaws.com:3306/codefast'
    
    SQLALCHEMY_TRACK_MODIFICATIONS = False
    CORS_HEADERS = 'Content-Type'
