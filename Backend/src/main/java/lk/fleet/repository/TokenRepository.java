package lk.fleet.repository;

import lk.fleet.entity.Token;
import org.springframework.data.jpa.repository.JpaRepository;

public interface TokenRepository extends JpaRepository<Token,String> {

}
