package lk.fleet.repository;

import lk.fleet.entity.Token;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;

public interface TokenRepository extends JpaRepository<Token,String> {

    @Query(value = "from Token where transportStatus=false")
    List<Token> getNotCompletedTokens();

    @Query(value = "from Token where transportStatus=true order by departureDateTime asc")
    List<Token> getAllCompletedTokens();

    @Query(value = "from Token where tokenID=?1")
    Token getTokenByID(String tokenID);

}
