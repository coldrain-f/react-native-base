package whale.dashboard.exception;

public class YomiNotFoundException extends EntityNotFoundException {
    public YomiNotFoundException(Long id) {
        super("Yomi", id);
    }
}
