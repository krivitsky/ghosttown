---
date: 2022-12-08
subject: "Re: technical excellence: chatgpt/etc for learning code & programming"
to: candidate-less-trainers@googlegroups.com
url: https://groups.google.com/d/msgid/candidate-less-trainers/16498682-f20f-4d7c-b0ec-1accf9821962n%40googlegroups.com
---

wow again! just learned you can ask chatgpt "refactor this code: xxx". even
if the result is trivial improvement at present, just the fact it can do
anything and understood my request, and where it might go in the future, is
to me mind-blowing. these are likely gonna be *disruptive* techs for sw
dev, and to repeat, lower the cost of learning new things... reducing
switching costs and increasing adaptiveness of people

*=== before (copied from a google search for "ugly code needing
refactoring")*
    public String statement() {
        double totalAmount = 0;
        int frequentRenterPoints = 0;
        Enumeration rentals = _rentals.elements();
        String result = "Rental Record for " + name() + "\n";
        while (rentals.hasMoreElements()) {
            double thisAmount = 0;
            Rental each = (Rental) rentals.nextElement();

            //determine amounts for each line
            switch (each.tape().movie().priceCode()) {
                case Movie.REGULAR:
                    thisAmount += 2;
                    if (each.daysRented() > 2)
                        thisAmount += (each.daysRented() - 2) * 1.5;
                    break;
                case Movie.NEW_RELEASE:
                    thisAmount += each.daysRented() * 3;
                    break;
                case Movie.CHILDRENS:
                    thisAmount += 1.5;
                    if (each.daysRented() > 3)
                        thisAmount += (each.daysRented() - 3) * 1.5;
                    break;
            }
            totalAmount += thisAmount;

            // add frequent renter points
            frequentRenterPoints ++;
            // add bonus for a two day new release rental
            if ((each.tape().movie().priceCode() == Movie.NEW_RELEASE) &&
each.daysRented() > 1) frequentRenterPoints ++;

            //show figures for this rental
            result += "\t" + each.tape().movie().name()+ "\t" +
String.valueOf(thisAmount) + "\n";
        }
        //add footer lines
        result += "Amount owed is " + String.valueOf(totalAmount) + "\n";
        result += "You earned " + String.valueOf(frequentRenterPoints) + "
frequent renter points";
        return result;
    }

*==== after, including chatgpt's explanation of what it did, at the bottom*
public String statement() {
    double totalAmount = 0;
    int frequentRenterPoints = 0;
    Enumeration rentals = _rentals.elements();
    String result = "Rental Record for " + name() + "\n";

    while (rentals.hasMoreElements()) {
        Rental each = (Rental) rentals.nextElement();
        double thisAmount = 0;

        // Determine amounts for each line.
        switch (each.tape().movie().priceCode()) {
            case Movie.REGULAR:
                thisAmount = 2;
                if (each.daysRented() > 2) {
                    thisAmount += (each.daysRented() - 2) * 1.5;
                }
                break;
            case Movie.NEW_RELEASE:
                thisAmount = each.daysRented() * 3;
                break;
            case Movie.CHILDRENS:
                thisAmount = 1.5;
                if (each.daysRented() > 3) {
                    thisAmount += (each.daysRented() - 3) * 1.5;
                }
                break;
        }

        // Add frequent renter points.
        frequentRenterPoints++;

        // Add bonus for a two day new release rental.
        if (
            (each.tape().movie().priceCode() == Movie.NEW_RELEASE) &&
            each.daysRented() > 1
        ) {
            frequentRenterPoints++;
        }

        // Show figures for this rental.
        result += "\t" + each.tape().movie().name() + "\t" + thisAmount + "\n";
        totalAmount += thisAmount;
    }

    // Add footer lines.
    result += "Amount owed is " + totalAmount + "\n";
    result += "You earned " + frequentRenterPoints + " frequent renter points";
    return result;
}

(chatgpt says) Here are a few improvements that were made:

The thisAmount variable was declared and initialized to 0 before the switch
statement, which is more readable than declaring and initializing it inside
each case.

The thisAmount variable was not converted to a string using String.valueOf
before being appended to result. Since thisAmount is a double, it will
automatically be converted to a string when it is concatenated with the
other strings in result.

The totalAmount and frequentRenterPoints variables were not converted to
strings using String.valueOf before being appended to result. Since these
variables are integers, they will automatically be converted to strings
when they are concatenated with the other strings in result.

The totalAmount and frequentRenterPoints variables were incremented using
the ++ operator, which is more concise than using totalAmount = totalAmount
+ 1 and frequentRenterPoints = frequentRenterPoints + 1.

The code was reformatted to use more consistent indentation and to make it
more readable.
