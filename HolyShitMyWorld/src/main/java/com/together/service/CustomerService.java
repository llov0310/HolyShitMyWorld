package com.together.service;

import com.together.domain.MemberVO;

public interface CustomerService {
	public MemberVO login(String user_id, String password);

}