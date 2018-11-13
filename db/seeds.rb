# Check what happens with ids and arrays of objects

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

q1 = Question.create({description: "How do you manage your books?"})

o1 = Option.create({answer:"Online accounting software", points: 14, question_id: q1.id})

# options = Option.create(
#     [
#         {
#             answer:"Online accounting software",
#             points: 14,
#             question: q1
#         }
#     ]
# )

