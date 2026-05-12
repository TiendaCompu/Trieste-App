from sqlalchemy import Column, Integer, String, DateTime, ForeignKey, Boolean, Text
from sqlalchemy.orm import relationship
from datetime import datetime

from .database import Base


class Workshop(Base):
    __tablename__ = "workshops"

    id = Column(Integer, primary_key=True, index=True)
    name = Column(String, nullable=False)
    rif = Column(String, unique=True)
    phone = Column(String)
    email = Column(String)
    active = Column(Boolean, default=True)
    created_at = Column(DateTime, default=datetime.utcnow)


class User(Base):
    __tablename__ = "users"

    id = Column(Integer, primary_key=True, index=True)
    workshop_id = Column(Integer, ForeignKey("workshops.id"))

    full_name = Column(String, nullable=False)
    email = Column(String, unique=True, nullable=False)
    password_hash = Column(String, nullable=False)
    role = Column(String, default="mechanic")

    active = Column(Boolean, default=True)
    created_at = Column(DateTime, default=datetime.utcnow)

    workshop = relationship("Workshop")


class Client(Base):
    __tablename__ = "clients"

    id = Column(Integer, primary_key=True, index=True)
    workshop_id = Column(Integer, ForeignKey("workshops.id"))

    full_name = Column(String, nullable=False)
    phone = Column(String)
    email = Column(String)
    document = Column(String)
    address = Column(Text)

    created_at = Column(DateTime, default=datetime.utcnow)

    workshop = relationship("Workshop")


class Vehicle(Base):
    __tablename__ = "vehicles"

    id = Column(Integer, primary_key=True, index=True)
    workshop_id = Column(Integer, ForeignKey("workshops.id"))
    client_id = Column(Integer, ForeignKey("clients.id"))

    plate = Column(String, unique=True, nullable=False)
    brand = Column(String)
    model = Column(String)
    year = Column(String)
    color = Column(String)
    vin = Column(String)
    mileage = Column(Integer)

    created_at = Column(DateTime, default=datetime.utcnow)

    workshop = relationship("Workshop")
    client = relationship("Client")


class WorkOrder(Base):
    __tablename__ = "work_orders"

    id = Column(Integer, primary_key=True, index=True)
    workshop_id = Column(Integer, ForeignKey("workshops.id"))
    vehicle_id = Column(Integer, ForeignKey("vehicles.id"))
    assigned_user_id = Column(Integer, ForeignKey("users.id"))

    code = Column(String, unique=True, nullable=False)
    status = Column(String, default="diagnostic")
    diagnosis = Column(Text)
    observations = Column(Text)

    created_at = Column(DateTime, default=datetime.utcnow)

    workshop = relationship("Workshop")
    vehicle = relationship("Vehicle")
    assigned_user = relationship("User")
