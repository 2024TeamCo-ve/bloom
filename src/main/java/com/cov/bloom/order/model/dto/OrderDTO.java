package com.cov.bloom.order.model.dto;

import java.sql.Date;

public class OrderDTO implements java.io.Serializable {
    private int orderNo;         //주문번호
    private String tid;             //결제 tid
    private Date orderDt;           //주문일시
    private Date orderFinalDt;      //작업완료일시
    private String requestCon;      //주문요구사항
    private String requestStatus;   //주문상태 대기, 거절, 수락(작업중), 완료
    private String orderFinal;      //구매확정 Y/N
    private String optionNo;        //옵션번호
    private String portNo;          //포폴번호
    private int memberNo;           //내 회원번호 //의뢰인 회워번호

    public OrderDTO() {
    }

    public OrderDTO(int orderNo, String tid, Date orderDt, Date orderFinalDt, String requestCon, String requestStatus, String orderFinal, String optionNo, String portNo, int memberNo) {
        this.orderNo = orderNo;
        this.tid = tid;
        this.orderDt = orderDt;
        this.orderFinalDt = orderFinalDt;
        this.requestCon = requestCon;
        this.requestStatus = requestStatus;
        this.orderFinal = orderFinal;
        this.optionNo = optionNo;
        this.portNo = portNo;
        this.memberNo = memberNo;
    }

    public int getOrderNo() {
        return orderNo;
    }

    public void setOrderNo(int orderNo) {
        this.orderNo = orderNo;
    }

    public String getTid() {
        return tid;
    }

    public void setTid(String tid) {
        this.tid = tid;
    }

    public Date getOrderDt() {
        return orderDt;
    }

    public void setOrderDt(Date orderDt) {
        this.orderDt = orderDt;
    }

    public Date getOrderFinalDt() {
        return orderFinalDt;
    }

    public void setOrderFinalDt(Date orderFinalDt) {
        this.orderFinalDt = orderFinalDt;
    }

    public String getRequestCon() {
        return requestCon;
    }

    public void setRequestCon(String requestCon) {
        this.requestCon = requestCon;
    }

    public String getRequestStatus() {
        return requestStatus;
    }

    public void setRequestStatus(String requestStatus) {
        this.requestStatus = requestStatus;
    }

    public String getOrderFinal() {
        return orderFinal;
    }

    public void setOrderFinal(String orderFinal) {
        this.orderFinal = orderFinal;
    }

    public String getOptionNo() {
        return optionNo;
    }

    public void setOptionNo(String optionNo) {
        this.optionNo = optionNo;
    }

    public String getPortNo() {
        return portNo;
    }

    public void setPortNo(String portNo) {
        this.portNo = portNo;
    }

    public int getMemberNo() {
        return memberNo;
    }

    public void setMemberNo(int memberNo) {
        this.memberNo = memberNo;
    }

    @Override
    public String toString() {
        return "OrderDTO{" +
                "orderNo=" + orderNo +
                ", tid='" + tid + '\'' +
                ", orderDt=" + orderDt +
                ", orderFinalDt=" + orderFinalDt +
                ", requestCon='" + requestCon + '\'' +
                ", requestStatus='" + requestStatus + '\'' +
                ", orderFinal='" + orderFinal + '\'' +
                ", optionNo='" + optionNo + '\'' +
                ", portNo='" + portNo + '\'' +
                ", memberNo=" + memberNo +
                '}';
    }
}

