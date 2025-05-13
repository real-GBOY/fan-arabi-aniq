
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Layout from "@/components/Layout";
import ProductGrid from "@/components/ProductGrid";
import { mockProducts } from "@/lib/mock-data";

const Products = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading delay
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <Layout>
      <div className="craft-container py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold mb-4">منتجاتنا</h1>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              استكشف مجموعتنا المتنوعة من الحرف اليدوية العربية الأصيلة
            </p>
          </div>
          
          {isLoading ? (
            <div className="flex justify-center items-center h-[300px]">
              <div className="relative w-12 h-12">
                <motion.div
                  className="absolute inset-0 rounded-full border-2 border-craft-primary"
                  initial={{ rotate: 0 }}
                  animate={{ rotate: 360 }}
                  transition={{
                    duration: 1,
                    ease: "linear",
                    repeat: Infinity,
                  }}
                />
              </div>
            </div>
          ) : (
            <ProductGrid 
              products={mockProducts} 
              showFilters={true} 
            />
          )}
        </motion.div>
      </div>
    </Layout>
  );
};

export default Products;
