package in.BillingProject.BillingSoftware.repository;

import in.BillingProject.BillingSoftware.entity.CategoryEntity;
import org.springframework.data.jpa.repository.JpaRepository;

public interface CategoryRepository extends JpaRepository<CategoryEntity,Long> {

}
