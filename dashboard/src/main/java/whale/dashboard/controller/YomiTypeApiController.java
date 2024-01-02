package whale.dashboard.controller;

import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.web.PageableDefault;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import whale.dashboard.dto.DeleteIdListRequest;
import whale.dashboard.dto.VocabularyDto;
import whale.dashboard.dto.YomiTypeDto;
import whale.dashboard.entity.YomiType;
import whale.dashboard.repository.YomiTypeRepository;
import whale.dashboard.service.VocabularyService;
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


    @PatchMapping
    public ResponseEntity<Void> modify(
            @RequestBody List<YomiTypeDto.ModifyRequest> requests) {
        yomiTypeService.modifyYomiType(requests);
        return ResponseEntity.ok().build();
    }


    @DeleteMapping
    public ResponseEntity<Void> remove(
            @RequestBody DeleteIdListRequest request) {
        yomiTypeService.removeYomiType(request.getIdList());
        return ResponseEntity.ok().build();
    }


    @GetMapping
    public Page<YomiTypeDto.Response> getResponse(
            @PageableDefault Pageable pageable) {
        return yomiTypeService.findAllYomiType(pageable);
    }
}
