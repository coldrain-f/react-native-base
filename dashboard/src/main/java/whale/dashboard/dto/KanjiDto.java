package whale.dashboard.dto;

import lombok.*;
import whale.dashboard.entity.Category;
import whale.dashboard.entity.Kanji;
import whale.dashboard.exception.CategoryNotFoundException;
import whale.dashboard.repository.CategoryRepository;

import javax.validation.constraints.NotBlank;
import javax.validation.constraints.NotNull;
import java.util.List;
import java.util.stream.Collectors;

public class KanjiDto {

    @Data
    @NoArgsConstructor(access = AccessLevel.PROTECTED)
    public static class RegistrationRequest {

        @NotBlank(message = "name을 입력해주세요.")
        private String name;

        @NotBlank(message = "sound를 입력해주세요.")
        private String sound;

        @NotBlank(message = "meaning을 입력해주세요.")
        private String meaning;

        @NotBlank(message = "strokeCount를 입력해주세요.")
        private String strokeCount;

        public RegistrationRequest(String name, String sound, String meaning, String strokeCount) {
            this.name = name;
            this.sound = sound;
            this.meaning = meaning;
            this.strokeCount = strokeCount;
        }

        public static List<Kanji> toEntityList(Long categoryId, List<RegistrationRequest> requests, CategoryRepository categoryRepository) {
            return requests.stream()
                    .map(request -> {
                        Category category = categoryRepository.findById(categoryId)
                                .orElseThrow(() -> new CategoryNotFoundException(categoryId));

                        return Kanji.builder()
                                .name(request.getName())
                                .sound(request.getSound())
                                .meaning(request.getMeaning())
                                .strokeCount(request.getStrokeCount())
                                .category(category)
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

        @NotBlank(message = "name을 입력해주세요.")
        private String name;

        @NotBlank(message = "sound를 입력해주세요.")
        private String sound;

        @NotBlank(message = "meaning을 입력해주세요.")
        private String meaning;

        @NotBlank(message = "strokeCount를 입력해주세요.")
        private String strokeCount;

        @NotNull(message = "Category ID를 입력해주세요.")
        private Long categoryId;


        public ModifyRequest(Long id, String name, String sound, String meaning, String strokeCount, Long categoryId) {
            this.id = id;
            this.name = name;
            this.sound = sound;
            this.meaning = meaning;
            this.strokeCount = strokeCount;
            this.categoryId = categoryId;
        }
    }


    @Getter
    @NoArgsConstructor(access = AccessLevel.PROTECTED)
    public static class Response {
        private Long id;
        private String name;
        private String sound;
        private String meaning;
        private String strokeCount;
        private CategoryDto.Response category;


        @Builder
        public Response(Long id, String name, String sound, String meaning, String strokeCount, CategoryDto.Response category) {
            this.id = id;
            this.name = name;
            this.sound = sound;
            this.meaning = meaning;
            this.strokeCount = strokeCount;
            this.category = category;
        }


        public static Response of(Kanji kanji) {
            return Response.builder()
                    .id(kanji.getId())
                    .name(kanji.getName())
                    .sound(kanji.getSound())
                    .meaning(kanji.getMeaning())
                    .strokeCount(kanji.getStrokeCount())
                    .category(kanji.getCategory() != null ? CategoryDto.Response.of(kanji.getCategory()) : null)
                    .build();
        }
    }
}
