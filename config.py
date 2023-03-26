import os

basedir = os.path.abspath(os.path.dirname(__file__))

class Config:
    # Database Options
    SQLALCHEMY_DATABASE_URI =\
        'sqlite:///' + os.path.join(basedir, 'database.db')
    SQLALCHEMY_TRACK_MODIFICATIONS = FalseLCHEMY_DATABASE_URI='sqlite:///app.db'
    CORS_HEADERS = 'Content-Type'
