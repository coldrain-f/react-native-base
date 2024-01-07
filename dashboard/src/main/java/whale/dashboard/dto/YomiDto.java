package whale.dashboard.dto;

import lombok.*;
import whale.dashboard.entity.Kanji;
import whale.dashboard.entity.Yomi;
import whale.dashboard.entity.YomiType;
import whale.dashboard.exception.KanjiNotFoundException;
import whale.dashboard.exception.YomiTypeNotFoundException;
import whale.dashboard.repository.KanjiRepository;
import whale.dashboard.repository.YomiTypeRepository;

import javax.validation.constraints.NotBlank;
import javax.validation.constraints.NotNull;
import java.util.List;
import java.util.stream.Collectors;

public class YomiDto {

    @Data
    @NoArgsConstructor(access = AccessLevel.PROTECTED)
    public static class RegistrationRequest {

        @NotBlank(message = "Name을 입력해주세요.")
        private String name;

        @NotNull(message = "YomiType을 입력해주세요.")
        private Long yomiType;

        public RegistrationRequest(String name, Long yomiType) {
            this.name = name;
            this.yomiType = yomiType;
        }

        public static List<Yomi> toEntityList(Long kanjiId, List<RegistrationRequest> requests, KanjiRepository kanjiRepository, YomiTypeRepository yomiTypeRepository) {
            return requests.stream()
                    .map(request -> {
                        Kanji kanji = kanjiRepository.findById(kanjiId)
                                .orElseThrow(() -> new KanjiNotFoundException(kanjiId));

                        YomiType yomiType = yomiTypeRepository.findById(request.getYomiType())
                                .orElseThrow(() -> new YomiTypeNotFoundException("YomiType Not Found with id : " + request.getYomiType()
                                ));

                        return Yomi.builder()
                                .name(request.getName())
                                .yomiType(yomiType)
                                .kanji(kanji)
                                .build();
                    })
                    .collect(Collectors.toList());
        }
    }

    @Data
    @NoArgsConstructor(access = AccessLevel.PROTECTED)
    public static class ModifyRequest {

        @NotNull(message = "수정할 대상 ID를 입력해주세요.")
        private Long id;

        @NotBlank(message = "Name을 입력해주세요.")
        private String name;

        public ModifyRequest(Long id, String name) {
            this.id = id;
            this.name = name;
        }
    }


    @Getter
    @NoArgsConstructor(access = AccessLevel.PROTECTED)
    public static class Response {
        private Long id;
        private String name;
        private YomiTypeDto.Response yomiType;
        private KanjiDto.Response kanji;

        @Builder
        public Response(Long id, String name, YomiTypeDto.Response yomiType, KanjiDto.Response kanji) {
            this.id = id;
            this.name = name;
            this.yomiType = yomiType;
            this.kanji = kanji;
        }

        public static Response of(Yomi yomi) {
            return Response.builder()
                    .id(yomi.getId())
                    .name(yomi.getName())
                    .yomiType(yomi.getYomiType() != null ? YomiTypeDto.Response.of(yomi.getYomiType()) : null)
                    .kanji(yomi.getKanji() != null ? KanjiDto.Response.of(yomi.getKanji()) : null)
                    .build();
        }
    }
}
