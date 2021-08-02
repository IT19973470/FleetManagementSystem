package lk.fleet.entity;

import javax.persistence.Entity;
import javax.persistence.Id;
import java.time.LocalDate;

@Entity
public class TVProgram {

    @Id
    private String programID;
    private String programName;
    private LocalDate StartingDate;
    private LocalDate EndingDate;
    private String producer;

    public String getProgramID() {
        return programID;
    }

    public void setProgramID(String programID) {
        this.programID = programID;
    }

    public String getProgramName() {
        return programName;
    }

    public void setProgramName(String programName) {
        this.programName = programName;
    }

    public LocalDate getStartingDate() {
        return StartingDate;
    }

    public void setStartingDate(LocalDate startingDate) {
        StartingDate = startingDate;
    }

    public LocalDate getEndingDate() {
        return EndingDate;
    }

    public void setEndingDate(LocalDate endingDate) {
        EndingDate = endingDate;
    }

    public String getProducer() {
        return producer;
    }

    public void setProducer(String producer) {
        this.producer = producer;
    }
}
