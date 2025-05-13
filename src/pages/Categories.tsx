
import Layout from "@/components/Layout";
import { motion } from "framer-motion";
import CategoriesShowcase from "@/components/CategoriesShowcase";
import { mockCategories, mockProducts } from "@/lib/mock-data";

const Categories = () => {
  return (
    <Layout>
      <div className="craft-container py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold mb-4">تصفح الفئات</h1>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              استكشف مجموعتنا المتنوعة من الحرف اليدوية مصنفة حسب الفئات
            </p>
          </div>

          <CategoriesShowcase categories={mockCategories} />
        </motion.div>
      </div>
    </Layout>
  );
};

export default Categories;
