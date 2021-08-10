package lk.fleet.service;

import lk.fleet.dto.TokenDTO;
import lk.fleet.entity.Token;

public interface TokenService {

    TokenDTO addToken (Token token);

    TokenDTO updateToken (String tokenID, Token token);

    boolean deleteToken (String tokenID);

}
