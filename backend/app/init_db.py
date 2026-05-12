from .database import Base, engine
from . import models


def init_database():
    Base.metadata.create_all(bind=engine)
    print("ZYTRONIX database tables created successfully.")


if __name__ == "__main__":
    init_database()
