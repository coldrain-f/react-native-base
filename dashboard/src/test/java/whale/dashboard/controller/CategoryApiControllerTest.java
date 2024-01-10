package whale.dashboard.controller;

import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;
import org.springframework.boot.test.autoconfigure.web.servlet.AutoConfigureMockMvc;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.http.MediaType;
import org.springframework.test.web.servlet.ResultActions;
import org.springframework.test.web.servlet.request.MockMvcRequestBuilders;
import whale.dashboard.BaseControllerTest;
import whale.dashboard.dto.CategoryDto;
import whale.dashboard.dto.DeleteIdListRequest;

import java.util.Arrays;
import java.util.List;

import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;

@SpringBootTest
@AutoConfigureMockMvc
public class CategoryApiControllerTest extends BaseControllerTest {

  @Test
  @DisplayName("카테고리 등록")
  void registerCategory() throws Exception {
      Long vocabularyId = 1L;
      CategoryDto.RegistrationRequest request1 = new CategoryDto.RegistrationRequest("Test Subject", "Test Description");
      CategoryDto.RegistrationRequest request2 = new CategoryDto.RegistrationRequest("Test Subject2", "Test Description2");

      ResultActions resultActions = mockMvc.perform(MockMvcRequestBuilders.post("/api/vocabulary/{id}/categories", vocabularyId)
              .contentType(MediaType.APPLICATION_JSON)
              .content(objectMapper.writeValueAsString(List.of(request1, request2))));

      resultActions.andExpect(status().isOk());
  }

    @Test
    @DisplayName("카테고리 수정")
    void modifyCategory() throws Exception {
        CategoryDto.ModifyRequest request1 = new CategoryDto.ModifyRequest(1L, "Modified Subject", "Modified Description", 1L);
        CategoryDto.ModifyRequest request2 = new CategoryDto.ModifyRequest(2L, "Modified Subject2", "Modified Description2", 1L);

        ResultActions resultActions = mockMvc.perform(MockMvcRequestBuilders.patch("/api/categories")
                .contentType(MediaType.APPLICATION_JSON)
                .content(objectMapper.writeValueAsString(List.of(request1, request2))));

        resultActions.andExpect(status().isOk());
    }

    @Test
    @DisplayName("카테고리 삭제")
    void removeCategory() throws Exception {
        DeleteIdListRequest request = new DeleteIdListRequest(Arrays.asList(1L, 2L));

        ResultActions resultActions = mockMvc.perform(MockMvcRequestBuilders.delete("/api/categories")
                .contentType(MediaType.APPLICATION_JSON)
                .content(objectMapper.writeValueAsString(request)));

        resultActions.andExpect(status().isOk());
    }

    @Test
    @DisplayName("카테고리 조회")
    void findAllCategory() throws Exception {
        Long vocabularyId = 1L;
        ResultActions resultActions = mockMvc.perform(MockMvcRequestBuilders.get("/api/vocabulary/{id}/categories", vocabularyId)
                .contentType(MediaType.APPLICATION_JSON));

        resultActions.andExpect(status().isOk());
    }
}
