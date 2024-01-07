package whale.dashboard.exception;

public class FuriganaNotFoundException extends EntityNotFoundException {
    public FuriganaNotFoundException(Long id) {
        super("Furigana", id);
    }
}
