package lk.fleet.entity;

import javax.persistence.*;
import java.time.LocalDateTime;

@Entity
public class Token {

    @Id
    private String tokenID;
    private LocalDateTime departureDateTime;
    private LocalDateTime arrivalDateTime;
    private String transportStatus;

    @OneToOne
    private Booking booking;

    @ManyToOne
    private SecurityOfficer securityOfficer;

    public String getTokenID() {
        return tokenID;
    }

    public void setTokenID(String tokenID) {
        this.tokenID = tokenID;
    }

    public LocalDateTime getDepartureDateTime() {
        return departureDateTime;
    }

    public void setDepartureDateTime(LocalDateTime departureDateTime) {
        this.departureDateTime = departureDateTime;
    }

    public LocalDateTime getArrivalDateTime() {
        return arrivalDateTime;
    }

    public void setArrivalDateTime(LocalDateTime arrivalDateTime) {
        this.arrivalDateTime = arrivalDateTime;
    }

    public String getTransportStatus() {
        return transportStatus;
    }

    public void setTransportStatus(String transportStatus) {
        this.transportStatus = transportStatus;
    }
}
