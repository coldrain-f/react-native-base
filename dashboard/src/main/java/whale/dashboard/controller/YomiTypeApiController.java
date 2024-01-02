package whale.dashboard.controller;

import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import whale.dashboard.dto.YomiTypeDto;
import whale.dashboard.service.YomiTypeService;

import java.util.List;

@RestController
@RequiredArgsConstructor
@RequestMapping("/api/yomi-types")
public class YomiTypeApiController {

    private final YomiTypeService yomiTypeService;

    @PostMapping
    public ResponseEntity<Void> register(
            @RequestBody List<YomiTypeDto.RegistrationRequest> requests) {
        yomiTypeService.registerYomiType(requests);
        return ResponseEntity.ok().build();
    }
}
