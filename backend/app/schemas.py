from pydantic import BaseModel
from typing import Optional


class ClientCreate(BaseModel):
    workshop_id: int
    full_name: str
    phone: Optional[str] = None
    email: Optional[str] = None
    document: Optional[str] = None
    address: Optional[str] = None


class VehicleCreate(BaseModel):
    workshop_id: int
    client_id: int
    plate: str
    brand: Optional[str] = None
    model: Optional[str] = None
    year: Optional[str] = None
    color: Optional[str] = None
    vin: Optional[str] = None
    mileage: Optional[int] = None


class WorkOrderCreate(BaseModel):
    workshop_id: int
    vehicle_id: int
    assigned_user_id: Optional[int] = None
    code: str
    status: Optional[str] = "diagnostic"
    diagnosis: Optional[str] = None
    observations: Optional[str] = None
