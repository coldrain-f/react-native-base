package whale.dashboard.dto;

import lombok.*;
import whale.dashboard.entity.*;
import whale.dashboard.exception.KanjiNotFoundException;
import whale.dashboard.exception.VocabularyNotFoundException;
import whale.dashboard.exception.YomiNotFoundException;
import whale.dashboard.repository.KanjiRepository;
import whale.dashboard.repository.VocabularyRepository;
import whale.dashboard.repository.WordRepository;
import whale.dashboard.repository.YomiRepository;

import javax.validation.constraints.NotBlank;
import javax.validation.constraints.NotNull;
import java.util.List;
import java.util.stream.Collectors;

public class WordDto {

    @Data
    @NoArgsConstructor(access = AccessLevel.PROTECTED)
    public static class RegistrationRequest {

        @NotBlank(message = "Name을 입력해주세요.")
        private String name;

        @NotBlank(message = "Meaning을 입력해주세요.")
        private String meaning;


        public RegistrationRequest(String name, String meaning) {
            this.name = name;
            this.meaning = meaning;
        }


        public static List<Word> toEntityList(Long yomiId, List<RegistrationRequest> requests, YomiRepository yomiRepository) {
            return requests.stream()
                    .map(request -> {
                        Yomi yomi  = yomiRepository.findById(yomiId)
                                .orElseThrow(() -> new YomiNotFoundException("Yomi Not Found with id : " + yomiId));

                        return Word.builder()
                                .name(request.getName())
                                .meaning(request.getMeaning())
                                .yomi(yomi)
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

        @NotBlank(message = "Meaning을 입력해주세요.")
        private String meaning;

        @NotNull(message = "Yomi ID를 입력해주세요.")
        private Long yomiId;

        public ModifyRequest(Long id, String name, String meaning, Long yomiId) {
            this.id = id;
            this.name = name;
            this.meaning = meaning;
            this.yomiId = yomiId;
        }
    }


    @Getter
    @NoArgsConstructor(access = AccessLevel.PROTECTED)
    public static class Response {
        private Long id;
        private String name;
        private String meaning;
        private YomiDto.Response yomi;

        @Builder
        public Response(Long id, String name, String meaning, YomiDto.Response yomi) {
            this.id = id;
            this.name = name;
            this.meaning = meaning;
            this.yomi = yomi;
        }

        public static Response of(Word word) {
            return Response.builder()
                    .id(word.getId())
                    .name(word.getName())
                    .meaning(word.getMeaning())
                    .yomi(word.getYomi() != null ? YomiDto.Response.of(word.getYomi()) : null)
                    .build();
        }
    }
}
