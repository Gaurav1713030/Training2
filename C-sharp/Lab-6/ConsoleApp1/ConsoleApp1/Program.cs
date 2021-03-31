using System;



namespace ConsoleApp
{
    public class Program
    {
        public static void Main(string[] args)
        {
            Inventory inv = new Inventory();
            Console.WriteLine(inv.ToString());
            Product prod = new Product
            {
                Title = "Laptop",
                price = 23000,
                Color = "Black"
            };
            prod.displayProduct();

        }
    }
}
