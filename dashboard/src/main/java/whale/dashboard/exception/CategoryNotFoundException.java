package whale.dashboard.exception;

public class CategoryNotFoundException extends EntityNotFoundException {
    public CategoryNotFoundException(Long id) {
        super("Category Not Found", id);
    }
}
