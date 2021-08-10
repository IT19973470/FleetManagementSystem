package lk.fleet.dto;

import lk.fleet.entity.UserAccount;

import java.time.LocalDate;

public class UserAccountDTO {

    private String employeeID;
    private String accountType;
    private String nic;
    private LocalDate DOB;
    private String name;
    private String address;
    private String contactNo;
    private String email;
    private LocalDate registeredDate;
    private String username;
    private String password;

    public UserAccountDTO(UserAccount userAccount){
        if(userAccount != null){
            this.employeeID = userAccount.getEmployeeID();
            this.accountType = userAccount.getAccountType();
            this.nic = userAccount.getNic();
            this.DOB = userAccount.getDOB();
            this.name = userAccount.getName();
            this.address = userAccount.getAddress();
            this.contactNo = userAccount.getContactNo();
            this.email = userAccount.getEmail();
            this.registeredDate = userAccount.getRegisteredDate();
            this.username = userAccount.getUsername();
            this.password = userAccount.getPassword();
        }
    }

    public String getEmployeeID() {
        return employeeID;
    }

    public void setEmployeeID(String employeeID) {
        this.employeeID = employeeID;
    }

    public String getAccountType() {
        return accountType;
    }

    public void setAccountType(String accountType) {
        this.accountType = accountType;
    }

    public String getNic() {
        return nic;
    }

    public void setNic(String nic) {
        this.nic = nic;
    }

    public LocalDate getDOB() {
        return DOB;
    }

    public void setDOB(LocalDate DOB) {
        this.DOB = DOB;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getAddress() {
        return address;
    }

    public void setAddress(String address) {
        this.address = address;
    }

    public String getContactNo() {
        return contactNo;
    }

    public void setContactNo(String contactNo) {
        this.contactNo = contactNo;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public LocalDate getRegisteredDate() {
        return registeredDate;
    }

    public void setRegisteredDate(LocalDate registeredDate) {
        this.registeredDate = registeredDate;
    }

    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }
}
