package lk.fleet.service.impl;


import lk.fleet.dto.MeterDetailDTO;
import lk.fleet.dto.TokenDTO;
import lk.fleet.entity.Token;
import lk.fleet.repository.TokenRepository;
import lk.fleet.service.TokenService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;
import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@Service
public class TokenServiceImpl implements TokenService {

    @Autowired
    private TokenRepository tokenRepository;

    @Override
    public TokenDTO addToken(Token token) {
        String dateTime = LocalDateTime.now().format(DateTimeFormatter.ofPattern("yyyyMMddhhmmss"));
        token.setTokenID("TK" + dateTime);
        token.getTokenID();
        return new TokenDTO(tokenRepository.save(token));
    }

    @Override
    public TokenDTO updateToken(String tokenID, Token token) {
        Optional<Token> optionalToken = tokenRepository.findById(tokenID);
        if (optionalToken.isPresent()) {
            Token tokenObj = optionalToken.get();
            tokenObj.setTokenID(token.getTokenID());
            tokenObj.setDepartureDateTime(token.getDepartureDateTime());
            tokenObj.setArrivalDateTime(token.getArrivalDateTime());
            tokenObj.setTransportStatus(token.isTransportStatus());
            return new TokenDTO(tokenRepository.save(tokenObj));
        }
        return null;
    }

    @Override
    public boolean deleteToken(String tokenID) {
        tokenRepository.deleteById(tokenID);
        return true;
    }


    @Override
    public List<TokenDTO> getAllTokens() {
        List<Token> tokens = tokenRepository.getNotCompletedTokens();
        List<TokenDTO> tokenDTOS = new ArrayList<>();
        for (Token token : tokens) {
            tokenDTOS.add(new TokenDTO(token, new MeterDetailDTO(token.getMeterDetail())));
        }
        return tokenDTOS;
    }

    public List<TokenDTO> getCompletedTokens() {
        List<Token> tokens = tokenRepository.getAllCompletedTokens();
        List<TokenDTO> tokenDTOS = new ArrayList<>();
        for (Token token : tokens) {
            tokenDTOS.add(new TokenDTO(token, new MeterDetailDTO(token.getMeterDetail())));
        }
        return tokenDTOS;
    }

    @Override
    public List<TokenDTO> getTokenByID(String tokenID) {
        Token TokenByID = tokenRepository.getTokenByID(tokenID);
        List<TokenDTO> tokenDTOS=new ArrayList<>();
        tokenDTOS.add(new TokenDTO(TokenByID, new MeterDetailDTO(TokenByID.getMeterDetail())));
        return tokenDTOS;
    }

}
