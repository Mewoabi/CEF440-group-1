//the code here helps for the import of images without errors
declare module "*.png" {
    const value: string;
    export default value;
  }

  declare module "*.jpg" {
    const value: string;
    export default value;
  }

  declare module "*.jpeg" {
    const value: string;
    export default value;
  }