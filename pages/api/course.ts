import type { NextApiRequest, NextApiResponse } from "next";

type Data = {
  info: any;
};

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  res.status(200).json({
    info: [
      {
        course: "Biochemistry",
        img: "https://i.ibb.co/6nwmkBd/couress-img-1.jpg",
        details:
          "Biochemistry is a field of study that investigates the chemical processes occurring in living organisms. It involves the structure and function of biomolecules such as proteins, carbohydrates, lipids, and nucleic acids. Biochemistry is a critical field in many areas, including medicine, agriculture, and biotechnology. It plays a crucial role in understanding the underlying mechanisms of diseases and developing new therapies. Biochemistry programs typically include courses in general and organic chemistry, molecular biology, biophysical chemistry, medical biochemistry, and laboratory techniques.",
      },
      {
        course: "Major in Economics",
        img: "https://i.ibb.co/WcxPKxP/couress-img-2.jpg",
        details:
          "Economics is a field of study that focuses on the production, distribution, and consumption of goods and services. A major in Economics typically includes courses in microeconomics, macroeconomics, econometrics, international economics, public finance, development economics, behavioral economics, environmental economics, and financial economics. Microeconomics looks at the behavior of individual economic agents, while macroeconomics studies the overall performance of the economy. Econometrics uses statistical methods to analyze economic data and test economic theories. Other courses explore the role of government in the economy, the economic challenges facing developing countries, the impact of environmental problems, and the functioning of financial markets and institutions. The courses offered in an Economics program will depend on the specific program and institution you attend.",
      },
      {
        course: "Business Media",
        Img: "https://i.ibb.co/f2yPYnh/couress-img-3.jpg",
        details:
          "A major in Business Media is a field of study that examines the intersection of business and media, including the use of media to communicate with consumers and stakeholders, as well as the role of media in shaping public opinion. Courses typically cover topics such as marketing, advertising, public relations, digital media, business communication, media law and ethics, media and society, entrepreneurship, and international business. In a marketing course, students will explore the principles and techniques of marketing, while an advertising course examines the creation and execution of advertising campaigns. Public relations courses cover media relations, crisis communication, and reputation management. Digital media courses focus on the use of social media, mobile apps, and other digital platforms to engage with consumers and stakeholders. Business communication courses cover effective communication in a business setting, including written and oral communication, interpersonal communication, and cross-cultural communication. Media law and ethics courses examine the legal and ethical issues surrounding media and business communication, including defamation, privacy, copyright, and intellectual property. Media and society courses study the relationship between media and society, including the role of media in shaping public opinion, the impact of media on culture, and the social and ethical implications of media use. Entrepreneurship courses explore the principles and practices of entrepreneurship, including business planning, financing, and management. International business courses focus on the challenges and opportunities of doing business in a global context, including cultural differences, international trade and finance, and foreign investment. The exact courses offered will depend on the specific program and institution you attend.",
      },
      {
        course: "Public Administration",
        img: "https://i.ibb.co/7zXwH2H/couress-img-4.jpg",
        details:
          "Public administration is a field of study that involves managing public agencies and programs. A major in public administration includes courses in organizational behavior, public policy, budgeting and financial management, human resources management, ethics and accountability, and public sector leadership. Organizational behavior focuses on principles of management in the public administration context. Public policy examines the policymaking process, including policy formulation, implementation, and evaluation, and the role of interest groups, bureaucrats, and elected officials. Budgeting and financial management covers public sector budgeting and financial analysis, including revenue sources and expenditure patterns. Human resources management focuses on employee relations, recruitment, selection, training, and performance management. Ethics and accountability examines the ethical and legal principles of public administration, including transparency and corruption prevention. Public sector leadership explores effective leadership qualities and skills, such as communication, decision-making, strategic planning, and innovation. Other courses in public administration may cover topics such as public sector economics, program evaluation, public sector information systems, and intergovernmental relations. The specific courses offered will vary by program and institution.",
      },
      {
        course: "Biotechnology",
        img: "https://i.ibb.co/gSPJyxP/couress-img-5.jpg",
        details:
          "Biotechnology is a field that combines biology and technology to develop innovative products and processes. A major in biotechnology includes courses in molecular biology, biochemistry, genetics, cell biology, microbiology, and bioinformatics. Molecular biology covers fundamental principles such as DNA replication, transcription, translation, gene expression, genetic engineering, and regulation of gene expression. Biochemistry examines the chemical processes that occur in living organisms, including enzyme catalysis, metabolism, and biochemical pathways. Genetics explores the principles of inheritance, gene mapping, population genetics, and the molecular mechanisms of inheritance. Cell biology covers cell structure and function, including organelles, cell membranes, and cellular processes like cell division, apoptosis, and signal transduction. Microbiology examines microorganisms such as bacteria, viruses, and fungi, and their role in disease and biotechnology. Bioinformatics covers the use of computational tools and databases to analyze biological data, including sequence analysis, gene prediction, and database searching. Other courses in biotechnology may include bioprocessing, biomanufacturing, bioethics, and regulatory affairs. The specific courses offered will depend on the program and institution you attend.",
      },
      {
        course: "Corporate Finance",
        img: "https://i.ibb.co/yPP80sV/couress-img-6.jpg",
        details:
          "Corporate finance involves managing the financial resources of corporations to maximize shareholder value. A major in corporate finance includes courses in financial accounting, financial management, investments, and financial markets. Financial accounting covers financial statements, income statements, balance sheets, and cash flow statements. Financial management examines capital budgeting, cost of capital, working capital management, and financial forecasting. Investments covers stocks, bonds, options, and futures, and portfolio management, risk management, and asset pricing. Financial markets examines the workings of financial markets, including the stock market, bond market, and foreign exchange market. Other courses in corporate finance may cover topics such as mergers and acquisitions, international finance, financial modeling, and corporate governance. The specific courses offered will depend on the program and institution you attend.",
      },
    ],
  });
}
