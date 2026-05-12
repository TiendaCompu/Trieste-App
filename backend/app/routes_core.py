from fastapi import APIRouter, Depends
from sqlalchemy.orm import Session

from .database import get_db
from .models import Client, Vehicle, WorkOrder
from .schemas import ClientCreate, VehicleCreate, WorkOrderCreate

router = APIRouter(prefix="/core", tags=["Core"])


@router.post("/clients")
def create_client(data: ClientCreate, db: Session = Depends(get_db)):
    client = Client(**data.dict())
    db.add(client)
    db.commit()
    db.refresh(client)
    return client


@router.get("/clients")
def list_clients(db: Session = Depends(get_db)):
    return db.query(Client).all()


@router.post("/vehicles")
def create_vehicle(data: VehicleCreate, db: Session = Depends(get_db)):
    vehicle = Vehicle(**data.dict())
    db.add(vehicle)
    db.commit()
    db.refresh(vehicle)
    return vehicle


@router.get("/vehicles")
def list_vehicles(db: Session = Depends(get_db)):
    return db.query(Vehicle).all()


@router.post("/work-orders")
def create_work_order(data: WorkOrderCreate, db: Session = Depends(get_db)):
    work_order = WorkOrder(**data.dict())
    db.add(work_order)
    db.commit()
    db.refresh(work_order)
    return work_order


@router.get("/work-orders")
def list_work_orders(db: Session = Depends(get_db)):
    return db.query(WorkOrder).all()
