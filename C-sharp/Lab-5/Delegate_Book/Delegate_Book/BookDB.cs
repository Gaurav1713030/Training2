using System;
using System.Collections;
using System.Collections.Generic;
using System.Text;

 

namespace Deligates
{
    public delegate void ProcessBookCallbackDelegate(Book book);



    public class BookDB
    {
        ArrayList list = new ArrayList();
        public void addBook(string title, string author, decimal price, bool paperBack)
        {
            list.Add(new Book
            {
                Title = title,
                Author = author,
                Price = price,
                PaperBack = paperBack
            });
        }
        public void processPaperbackBooks(ProcessBookCallbackDelegate processBook)
        {
            foreach (Book b in list)
            {
                if (b.PaperBack)
                {
                    processBook(b);
                }
            }
        }

    }
}