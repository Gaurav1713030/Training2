using System;

namespace Deligates
{
    class Program
    {

        //delegate void Del(string s);
        public delegate void ProcessBookCallbackDelegate(Book book);
        static void Main(string[] args)
        {

            //delegate static void Del(string str);
            //    Del d = new Del(Notify);
            //    abc(d);
            //    d = Greet;
            //    abc(d);
            //}



            //static void foo(int a)
            //{
            //    Console.WriteLine(a);
            //}



            //static void Notify(string s)
            //{
            //        Console.WriteLine($"Notification recieved for {s}");
            //}



            //static void Greet(string s)
            //{
            //    Console.WriteLine($"Greet recieved for {s}");
            //}



            //static void abc(Del d)
            //{
            //    d("japan");
            //}
            //Book b1 = new Book
            //{
            //    Title = "Let us C",
            //    Author = "Yashwant Kanetkar",
            //    Price = 200,
            //    PaperBack = true



            //};



            BookDB db1 = new BookDB();
            addBookToShelf(db1);
            ProcessBookCallbackDelegate del = new ProcessBookCallbackDelegate(PrintBooks);


            Console.WriteLine("print books");
            db1.processPaperbackBooks(PrintBooks);
            Console.WriteLine("sell books");
            db1.processPaperbackBooks(sellBooks);


            del += RentingBooks;
            Console.WriteLine("rent books");
            db1.processPaperbackBooks(RentingBooks);
        }



        static void addBookToShelf(BookDB db1)
        {
            db1.addBook("Let us C", "Y K", 200, true);
            db1.addBook("Algo", "ABC", 500, true);

        }

        static void PrintBooks(Book b)
        {
            Console.WriteLine($"{b.Title}");
        }



        static void sellBooks(Book b)
        {
            Console.WriteLine($"{b.Title}");
        }



        static void RentingBooks(Book b)
        {
            Console.WriteLine($"{b.Title}");
        }

    }
}
