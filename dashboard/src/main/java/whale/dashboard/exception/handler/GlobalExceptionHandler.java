package whale.dashboard.exception.handler;

import lombok.extern.slf4j.Slf4j;
import org.springframework.dao.DataIntegrityViolationException;
import org.springframework.http.HttpStatus;
import org.springframework.web.HttpRequestMethodNotSupportedException;
import org.springframework.web.bind.MethodArgumentNotValidException;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestControllerAdvice;
import org.springframework.web.method.annotation.MethodArgumentTypeMismatchException;
import whale.dashboard.exception.EntityNotFoundException;

import javax.validation.ConstraintViolationException;

@RestControllerAdvice
@Slf4j
public class GlobalExceptionHandler {


    /*
        웹 요청에서 매개변수 유효성 검증 실패시 발생
        @RequestParam, @PathVariable 등에서 발생 가능
     */
    @ResponseStatus(HttpStatus.BAD_REQUEST)
    @ExceptionHandler(IllegalArgumentException.class)
    public ErrorResponse handleIllegalException(IllegalArgumentException e) {
        log.error("[exceptionHandle] ex", e);
        return new ErrorResponse("BAD", e.getMessage());
    }


    /*
        메서드 내에서 매개변수 형식 불일치시 발생
        @RequestParam, @PathVariable 등에서 발생 가능
    */
    @ExceptionHandler(MethodArgumentTypeMismatchException.class)
    @ResponseStatus(HttpStatus.BAD_REQUEST)
    protected ErrorResponse handleMethodArgumentTypeMismatchException(MethodArgumentTypeMismatchException e) {
        log.error("handleMethodArgumentTypeMismatchException", e);
        return new ErrorResponse("Bad", "Invalid input value");
    }


    /*
        DTO 유효성 검증 실패시 발생
        @RequestBody, @ModelAttribute 등에서 발생 가능
     */
    @ExceptionHandler(MethodArgumentNotValidException.class)
    @ResponseStatus(HttpStatus.BAD_REQUEST)
    protected ErrorResponse handleMethodArgumentNotValidException(MethodArgumentNotValidException e) {
        log.error("handleMethodArgumentNotValidException", e);
        return new ErrorResponse("Bad", "Invalid input value");
    }


    /*
        엔티티의 제약 조건을 위반시 발생
        @Valid가 사용된 메서드 매개변수나 DTO 유효성 검증에서도 발생
     */
    @ResponseStatus(HttpStatus.BAD_REQUEST)
    @ExceptionHandler(ConstraintViolationException.class)
    public ErrorResponse handleConstraintViolationException(ConstraintViolationException e) {
        log.error("[exceptionHandle] ex", e);
        return new ErrorResponse("BAD", e.getMessage());
    }


    /*
        엔티티가 존재하지 않을 때 발생
        VocabularyNotFoundException, CategoryNotFoundException, ...
     */
    @ResponseStatus(HttpStatus.BAD_REQUEST)
    @ExceptionHandler(EntityNotFoundException.class)
    public ErrorResponse handleEntityNotFoundException(EntityNotFoundException e) {
        log.error("[exceptionHandle] ex", e);
        return new ErrorResponse("BAD", e.getMessage());
    }


    /*
        데이터 무결성 제약 조건 위반시 발생
        중복된 PK나 FK 제약 조건 등
     */
    @ExceptionHandler(DataIntegrityViolationException.class)
    @ResponseStatus(HttpStatus.BAD_REQUEST)
    protected ErrorResponse handleDataIntegrityViolationException(DataIntegrityViolationException e) {
        log.error("handleDataIntegrityViolationException", e);
        return new ErrorResponse("Bad", e.getMessage());
    }


    /*
        지원되지 않는 HTTP 메서드가 요청될 때 발생
    */
    @ExceptionHandler(HttpRequestMethodNotSupportedException.class)
    @ResponseStatus(HttpStatus.FORBIDDEN)
    protected ErrorResponse handleHttpRequestMethodNotSupportedException(HttpRequestMethodNotSupportedException e) {
        log.error("handleHttpRequestMethodNotSupportedException", e);
        return new ErrorResponse("Forbidden","Access denied");
    }


    @ResponseStatus(HttpStatus.INTERNAL_SERVER_ERROR)
    @ExceptionHandler
    public ErrorResponse handleException(Exception e) {
        log.error("[exceptionHandle] ex", e);
        return new ErrorResponse("EX", "내부 오류");
    }
}
