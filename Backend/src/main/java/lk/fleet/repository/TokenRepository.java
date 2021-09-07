package lk.fleet.repository;

import lk.fleet.entity.Token;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;

public interface TokenRepository extends JpaRepository<Token,String> {

//    @Query(value = "from Token where tokenID=?1 order by transportStatus asc")
//    List<Token> getTokenByID(String tokenID);

}
