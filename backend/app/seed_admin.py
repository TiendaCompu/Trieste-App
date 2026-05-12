from sqlalchemy.orm import Session

from .database import SessionLocal
from .models import User, Workshop
from .security import get_password_hash


def create_initial_admin():
    db: Session = SessionLocal()

    workshop = db.query(Workshop).filter(Workshop.name == "ZYTRONIX Demo").first()

    if not workshop:
        workshop = Workshop(
            name="ZYTRONIX Demo",
            rif="J-00000000-0",
            phone="0000-0000000",
            email="admin@zytronix.online"
        )
        db.add(workshop)
        db.commit()
        db.refresh(workshop)

    admin_exists = db.query(User).filter(User.email == "admin@zytronix.online").first()

    if not admin_exists:
        admin_user = User(
            workshop_id=workshop.id,
            full_name="Christian Lahesa",
            email="admin@zytronix.online",
            password_hash=get_password_hash("change_this_password"),
            role="super_admin"
        )

        db.add(admin_user)
        db.commit()

        print("ZYTRONIX administrator created successfully.")
    else:
        print("Administrator already exists.")

    db.close()


if __name__ == "__main__":
    create_initial_admin()
