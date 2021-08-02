package lk.fleet.entity;

import javax.persistence.Entity;
import javax.persistence.Id;
import java.time.LocalDate;

@Entity
public class Application {
    @Id
    public String RequestID;
    public String Destination;
    public String vehicletype;
    public String approval;
    public LocalDate Depaturedate;
    public LocalDate Arrivaledate;

    public String getRequestID() {
        return RequestID;
    }

    public void setRequestID(String requestID) {
        RequestID = requestID;
    }

    public String getDestination() {
        return Destination;
    }

    public void setDestination(String destination) {
        Destination = destination;
    }

    public String getVehicletype() {
        return vehicletype;
    }

    public void setVehicletype(String vehicletype) {
        this.vehicletype = vehicletype;
    }

    public String getApproval() {
        return approval;
    }

    public void setApproval(String approval) {
        this.approval = approval;
    }

    public LocalDate getDepaturedate() {
        return Depaturedate;
    }

    public void setDepaturedate(LocalDate depaturedate) {
        Depaturedate = depaturedate;
    }

    public LocalDate getArrivaledate() {
        return Arrivaledate;
    }

    public void setArrivaledate(LocalDate arrivaledate) {
        Arrivaledate = arrivaledate;
    }
}
