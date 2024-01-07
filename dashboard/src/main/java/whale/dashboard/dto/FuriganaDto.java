package whale.dashboard.dto;

import lombok.*;
import whale.dashboard.entity.Furigana;
import whale.dashboard.entity.Word;
import whale.dashboard.exception.VocabularyNotFoundException;
import whale.dashboard.exception.WordNotFoundException;
import whale.dashboard.repository.WordRepository;

import javax.validation.constraints.NotBlank;
import javax.validation.constraints.NotNull;
import java.util.List;
import java.util.stream.Collectors;

public class FuriganaDto {

    @Data
    @NoArgsConstructor(access = AccessLevel.PROTECTED)
    public static class RegistrationRequest {

        @NotBlank(message = "token을 입력해주세요.")
        private String token;

        @NotBlank(message = "reading을 입력해주세요.")
        private String reading;

        public RegistrationRequest(String token, String reading) {
            this.token = token;
            this.reading = reading;
        }

        public static List<Furigana> toEntityList(Long wordId, List<RegistrationRequest> requests, WordRepository wordRepository) {
            return requests.stream()
                    .map(request -> {
                        Word word = wordRepository.findById(wordId)
                                .orElseThrow(() -> new WordNotFoundException(wordId));

                        return Furigana.builder()
                                .token(request.getToken())
                                .reading(request.getReading())
                                .word(word)
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

        @NotBlank(message = "token을 입력해주세요.")
        private String token;

        @NotBlank(message = "reading을 입력해주세요.")
        private String reading;

        public ModifyRequest(Long id, String token, String reading) {
            this.id = id;
            this.token = token;
            this.reading = reading;
        }
    }


    @Getter
    @NoArgsConstructor(access = AccessLevel.PROTECTED)
    public static class Response {
        private Long id;
        private String token;
        private String reading;
        private WordDto.Response word;

        @Builder
        public Response(Long id, String token, String reading, WordDto.Response word) {
            this.id = id;
            this.token = token;
            this.reading = reading;
            this.word = word;
        }


        public static Response of(Furigana furigana) {
            return Response.builder()
                    .id(furigana.getId())
                    .token(furigana.getToken())
                    .reading(furigana.getReading())
                    .word(furigana.getWord() != null ? WordDto.Response.of(furigana.getWord()) : null)
                    .build();
        }


    }
}
