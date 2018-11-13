drop_table :options
drop_table :questions

questions = Question.create(
    [
        {
            description: "How do you manage your books?"
        },
        {
            description: "Who manages your business finances?"
        },
        {
            description: "When do you ask for payment?"
        },
        {
            description:"What are your credit terms?"
        },
        {
            description:"What do you do when payment is overdue?"
        },
        {
            description:"What do you do if someone consistently pays late?"
        },
        {
            description:"How do you receive payment?"
        },
        {
            description:"How do you record your expenses?"
        },
        {
            description:"What do you do with the profits?"
        },
        {
            description:"How do you forecast your cashflow?"
        }
    ]
)

# Question 1 and options
q1 = Question.create({description: "How do you manage your books?"})
q1options = Option.create(
        [
            {answer:"Online accounting software", points: 15, question_id: q1.id},
            {answer:"Desktop accounting software", points: 10, question_id: q1.id},
            {answer:"Spreadsheets (love them formulas!)", points: 5, question_id: q1.id},
            {answer:"Books? You mean like Harry Potter?", points: 0, question_id: q1.id},
        ]
)

# Question 2 and options
q2 = Question.create({description: "Who manages your business finances?"})
q2options = Option.create(
        [
            {answer:"An external finance person", points: 15, question_id: q2.id},
            {answer:"Someone in-house", points: 10, question_id: q2.id},
            {answer:"The business owner", points: 5, question_id: q2.id},
            {answer:"Management schmanagement!", points: 0, question_id: q2.id},
        ]
)

# Question 3 and options
q3 = Question.create({description: "When do you ask for payment?"})
q3options = Option.create(
        [
            {answer:"Immediately", points: 15, question_id: q3.id},
            {answer:"Within a couple of weeks", points: 10, question_id: q3.id},
            {answer:"Within a month", points: 5, question_id: q3.id},
            {answer:"Oh, that reminds me!", points: 0, question_id: q3.id},
        ]
)

# Question 4 and options
q4 = Question.create({description: "What are your credit terms?"})
q4options = Option.create(
        [
            {answer:"I don’t offer credit", points: 15, question_id: q4.id},
            {answer:"1-30 days", points: 10, question_id: q4.id},
            {answer:"More than 30 days", points: 5, question_id: q4.id},
            {answer:"Hopefully they’ll pay me sometime", points: 0, question_id: q4.id},
        ]
)

# Question 5 and options
q5 = Question.create({description: "What do you do when payment is overdue?"})
q5options = Option.create(
        [
            {answer:"Hit the phones every day until I get paid", points: 15, question_id: q5.id},
            {answer:"Send an occasional gentle reminder", points: 10, question_id: q5.id},
            {answer:"Wait and hope for the best", points: 5, question_id: q5.id},
            {answer:'Sign off my emails to them “regards” rather than “kind regards. That’ll show ‘em', points: 0, question_id: q5.id},
        ]
)

# Question 6 and options
q6 = Question.create({description: "What do you do if someone consistently pays late?"})
q6options = Option.create(
        [
            {answer:"Charge them more", points: 15, question_id: q6.id},
            {answer:"Re-negotiate payment terms", points: 10, question_id: q6.id},
            {answer:"End our relationship with them", points: 5, question_id: q6.id},
            {answer:"Grumble under my breath and hope they’ll change their ways", points: 0, question_id: q6.id},
        ]
)

# Question 7 and options
q7 = Question.create({description: "How do you receive payment?"})
q7options = Option.create(
        [
            {answer:"Cash, credit card or bank transfer", points: 15, question_id: q7.id},
            {answer:"Cash only", points: 10, question_id: q7.id},
            {answer:"Cheque", points: 5, question_id: q7.id},
            {answer:"Camels", points: 0, question_id: q7.id},
        ]
)


# Question 8 and options
q8 = Question.create({description: "How do you record your expenses?"})
q8options = Option.create(
        [
            {answer:"with an app (like ReceiptBank or Expensify)", points: 15, question_id: q8.id},
            {answer:"in a spreadsheet", points: 10, question_id: q8.id},
            {answer:"in a ledger", points: 5, question_id: q8.id},
            {answer:"by putting all my receipts in a shoebox", points: 0, question_id: q8.id},
        ]
)

# Question 9 and options
q9 = Question.create({description: "What do you do with the profits?"})
q9options = Option.create(
        [
            {answer:"Set aside a portion of every paid invoice", points: 15, question_id: q9.id},
            {answer:"Reinvest every penny we receive back into the business", points: 10, question_id: q9.id},
            {answer:"Save some cash, but only from the bigger invoices", points: 5, question_id: q9.id},
            {answer:"Buy something cool", points: 0, question_id: q9.id},
        ]
)

# Question 10 and options
q10 = Question.create({description: "How do you forecast your cashflow?"})
q10options = Option.create(
        [
            {answer:"We use a cash flow forecasting tool (like Float!)", points: 15, question_id: q10.id},
            {answer:"Our accountant does it", points: 10, question_id: q10.id},
            {answer:"Manually using spreadsheets", points: 5, question_id: q10.id},
            {answer:'What is this “forecast” of which you speak?', points: 0, question_id: q10.id},
        ]
)





