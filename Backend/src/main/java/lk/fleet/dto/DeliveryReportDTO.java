package lk.fleet.dto;

import java.util.List;

public class DeliveryReportDTO {

    private int[][] weeklyDeliveries;
    private int[][][] dailyDeliveries;
    private String[] dates;

    public int[][] getWeeklyDeliveries() {
        return weeklyDeliveries;
    }

    public void setWeeklyDeliveries(int[][] weeklyDeliveries) {
        this.weeklyDeliveries = weeklyDeliveries;
    }

    public int[][][] getDailyDeliveries() {
        return dailyDeliveries;
    }

    public void setDailyDeliveries(int[][][] dailyDeliveries) {
        this.dailyDeliveries = dailyDeliveries;
    }

    public String[] getDates() {
        return dates;
    }

    public void setDates(String[] dates) {
        this.dates = dates;
    }
}
