package lk.fleet.controller;

import lk.fleet.entity.Token;
import lk.fleet.service.TokenService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@CrossOrigin
@RestController
@RequestMapping(value = "fleetmanagement/" + "token")
public class TokenController {

    @Autowired
    private TokenService tokenService;

    @PostMapping(value = "/addToken")
    public ResponseEntity addToken(@RequestBody Token token) {
        return ResponseEntity.ok(tokenService.addToken(token));
    }

    @PutMapping(value = "/updateToken/{tokenID}")
    public ResponseEntity updateToken (@PathVariable String tokenID, @RequestBody Token token) {
        return ResponseEntity.ok(tokenService.updateToken(tokenID, token));
    }

    @DeleteMapping(value = "/deleteToken/{tokenID}")
    public ResponseEntity deleteToken (@PathVariable String tokenID) {
        return ResponseEntity.ok(tokenService.deleteToken(tokenID));
    }

    @GetMapping(value = "/getAllTokens")
    public ResponseEntity getAllTokens() {
        return ResponseEntity.ok(tokenService.getAllTokens());
    }


}
