package whale.dashboard.exception;

public class WordNotFoundException extends EntityNotFoundException {
    public WordNotFoundException(Long id) {
        super("Word", id);
    }
}
