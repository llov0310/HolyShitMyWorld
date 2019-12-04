package com.together.domain;

import java.sql.Timestamp;
public class MemberVO {
	
	private String user_id;
	private String password;
	private String ph_no;
	private String user_nm;
	private Timestamp register_dt;
	private int authority_no;
	private String birth_dt;
	private String f_uid; //파이어베이스 아이디가 만들어질 때 생성되는 uid
	
	// 관리자 페이지 : json을 사용하여 라인 차트를 그릴 때 필요한 변수 선언 - 해당 연도 월별 가입자 수 확인
	private String count;
	private String month;
	
	// 관리자 페이지 : 도넛 차트를 그릴 때 필요한 변수 선언
	private String gender_ck;
	private String age_10;
	private String age_20;
	private String age_30;
	private String age_40;
	private String age_50;
	private String age_60_over;
	public String getUser_id() {
		return user_id;
	}
	public void setUser_id(String user_id) {
		this.user_id = user_id;
	}
	public String getPassword() {
		return password;
	}
	public void setPassword(String password) {
		this.password = password;
	}
	public String getPh_no() {
		return ph_no;
	}
	public void setPh_no(String ph_no) {
		this.ph_no = ph_no;
	}
	public String getUser_nm() {
		return user_nm;
	}
	public void setUser_nm(String user_nm) {
		this.user_nm = user_nm;
	}
	public Timestamp getRegister_dt() {
		return register_dt;
	}
	public void setRegister_dt(Timestamp register_dt) {
		this.register_dt = register_dt;
	}
	public int getAuthority_no() {
		return authority_no;
	}
	public void setAuthority_no(int authority_no) {
		this.authority_no = authority_no;
	}
	public String getBirth_dt() {
		return birth_dt;
	}
	public void setBirth_dt(String birth_dt) {
		this.birth_dt = birth_dt;
	}
	public String getF_uid() {
		return f_uid;
	}
	public void setF_uid(String f_uid) {
		this.f_uid = f_uid;
	}
	public String getCount() {
		return count;
	}
	public void setCount(String count) {
		this.count = count;
	}
	public String getMonth() {
		return month;
	}
	public void setMonth(String month) {
		this.month = month;
	}
	public String getGender_ck() {
		return gender_ck;
	}
	public void setGender_ck(String gender_ck) {
		this.gender_ck = gender_ck;
	}
	public String getAge_10() {
		return age_10;
	}
	public void setAge_10(String age_10) {
		this.age_10 = age_10;
	}
	public String getAge_20() {
		return age_20;
	}
	public void setAge_20(String age_20) {
		this.age_20 = age_20;
	}
	public String getAge_30() {
		return age_30;
	}
	public void setAge_30(String age_30) {
		this.age_30 = age_30;
	}
	public String getAge_40() {
		return age_40;
	}
	public void setAge_40(String age_40) {
		this.age_40 = age_40;
	}
	public String getAge_50() {
		return age_50;
	}
	public void setAge_50(String age_50) {
		this.age_50 = age_50;
	}
	public String getAge_60_over() {
		return age_60_over;
	}
	public void setAge_60_over(String age_60_over) {
		this.age_60_over = age_60_over;
	}
	
}
