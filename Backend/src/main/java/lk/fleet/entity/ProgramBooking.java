package lk.fleet.entity;

import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;

@Entity
public class ProgramBooking {
    @Id
    private String programBookingId;

    @ManyToOne
    @JoinColumn(nullable = false)
    private TVProgram tvProgram;

    public String getProgramBookingId() {
        return programBookingId;
    }

    public void setProgramBookingId(String programBookingId) {
        this.programBookingId = programBookingId;
    }

    public TVProgram getTvProgram() {
        return tvProgram;
    }

    public void setTvProgram(TVProgram tvProgram) {
        this.tvProgram = tvProgram;
    }
}
