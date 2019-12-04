package com.together.service;

import org.springframework.stereotype.Service;
import com.together.domain.MemberVO;
import com.together.mapper.CustomerMapper;

import lombok.AllArgsConstructor;

@Service
@AllArgsConstructor
public class CustomerServiceImplement implements CustomerService {
	private CustomerMapper mapper;

	//로그인
	@Override
	public MemberVO login(String user_id, String password) {
		// TODO Auto-generated method stub
		return mapper.login(user_id, password);
	}
	
}