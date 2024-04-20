import { useState } from "react";
import Navbar from "../components/Navbar/Navbar";
import { useParams } from "react-router-dom";

const ArticleDetails = () => {
  const [text, setText] = useState("");
  const [comments, setComments] = useState<string[]>([]);

  const handleChange = (event: any) => {
    const textarea = event.target;
    const { value } = textarea;
    const maxCharacters = 1000;

    if (value.length <= maxCharacters) {
      textarea.style.height = "auto"; // Reset height to auto to allow textarea to resize
      textarea.style.height = `${textarea.scrollHeight}px`; // Set the height to the scrollHeight of the textarea
      setText(value);
    } else {
      // Truncate the input text if it exceeds the maximum character count
      setText(value.slice(0, maxCharacters));
    }
  };

  const handleSubmit = () => {
    if (text.trim() !== "") {
      // Add a new comment with the current text to the comments array
      setComments([...comments, text]);
      // Clear the textarea
      setText("");
    }
  };

  const data = [
    {
      title: "Benefits of Milk for Children's Brain Development",
      description:
        "Having intelligent children is the hope of all mothers. The development of a baby's brain does not just appear, it starts in the womb and continues to develop until childhood. Mothers may also have consumed milk for the development of their child's brain since pregnancy.",
      timestamp: "3 Minutes Ago - Wise Parent Admin",
      imgTitle: "nutrisi.png",
      category: ["Nutrition"],
      slug: "benefits-of-milk-for-childrens-brain-development",
    },
    {
      title: "Effective Ways to Educate Children to Be Smart and Intelligent",
      description:
        "Smart children are considered to be able to achieve better in school and achieve success in life. Therefore, it is not uncommon for parents to be willing to do anything to make their children smarter, such as enrolling their children in tutoring/course programs.",
      timestamp: "60 Minutes Ago - Wise Parent Admin",
      imgTitle: "stimulasi.png",
      category: ["Stimulation"],
      slug: "effective-ways-to-educate-children-to-be-smart-and-intelligent",
    },
    {
      title: "How to Support Children's Potential in the Digital Era",
      description:
        "Technological advances in the digital era provide many benefits in human life, such as facilitating communication, searching for information, and helping the learning process.",
      timestamp: "90 Minutes Ago - Wise Parent Admin",
      imgTitle: "parenting.png",
      category: ["Parenting", "Stimulation"],
      slug: "how-to-support-childrens-potential-in-the-digital-era",
    },
    // Add more objects as needed
  ];

  const { slug } = useParams();

  return (
    <>
      <Navbar theme="light" selected="krisbu" />
      <div className="overflow-hidden bg-white mt-[40px]">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="my-16 mx-6">
            {slug === "benefits-of-milk-for-childrens-brain-development" ? (
              <div className="grid lg:grid-cols-12 gap-12">
                <div className="col-span-8 flex flex-col">
                  <p className="text-4xl font-semibold leading-snug">
                      Benefits of Milk for Children's Brain Development
                  </p>
                  <div className="flex flex-row justify-between md:justify-start gap-4 my-4">
                    <p className="text-lg font-semibold text-gray-500">
                      By Admin WiseParent
                    </p>
                    <p className="text-lg font-semibold text-gray-500">|</p>
                    <p className="text-lg font-semibold text-gray-500">
                      Wednesday, March 20 2024
                    </p>
                  </div>
                  <img src="/img/nutrisi.png" alt="artikel" className="mt-4" />
                  <p className="my-12 text-lg text-gray-700">
                    Having intelligent children is the hope of all mothers.
                    Your little one's brain development doesn't just happen
                    begins in the womb and continues to develop into adulthood
                    child. Mother may also have consumed milk
                    for the development of the child's brain since pregnancy.
                  </p>
                  <p className="mb-12 text-lg text-gray-700">
                    The Indonesian Pediatrician Association (IDAI) said monitoring
                    child growth and development in the first 1,000 days of life (from
                    in the womb until the age of 2 years) is very important
                    considering the rapid growth and development at age
                    This. Because, at the age of 2 years the child's height has reached
                    half the height of an adult and already has brain development
                    reaching 80 percent of the adult brain.
                  </p>
                  <p className="mb-6 text-lg text-gray-700">
                    In fact, Mother, how well the brain develops depends
                    on many factors other than genes, namely:
                  </p>
                  <ul className="mb-12">
                    <li className="text-lg mb-2 text-gray-700">
                      - Nutrition that begins during pregnancy
                    </li>
                    <li className="text-lg mb-2 text-gray-700">
                      - Exposure to toxins or infections
                    </li>
                    <li className="text-lg mb-2 text-gray-700">
                      - Children's experiences with other people
                    </li>
                    <li className="text-lg  text-gray-700">
                      - Parenting patterns.
                    </li>
                  </ul>
                  <p className="mb-12 text-lg text-gray-700">
                    Nutrition is obtained from nutritious foods and drinks
                    Mother has consumed it since she was pregnant with her baby. Starting from
                    vegetables, animal and vegetable side dishes, fruit and milk
                    which supports brain development. In this article, it will be
                    discusses some of the benefits of milk for children's brain development.
                  </p>
                  <p className="mb-12 text-lg text-gray-700">
                    Milk contains calcium, vitamin D, protein, vitamin A, and
                    zinc which is all important for growth and
                    development of the baby. Milk also contains fat
                    is a source of calories for your little one. Plus, milk
                    which is fortified with micronutrients and non-fatty acids
                    Polyunsaturated fats like omega 3 are good for development
                    Baby's cognitive.
                  </p>
                  <p className="mb-6 text-3xl leading-snug font-bold text-gray-700">
                    The nutritional content in milk is good for children's brains
                  </p>
                  <p className="mb-12 text-lg text-gray-700">
                    As mentioned earlier, milk contains a lot of it
                    nutrition to support brain function. So what are the contents?
                    the nutrients that need to be in milk for your little one
                    help the development of brain function?
                  </p>
                  <p className="mb-6 text-3xl leading-snug font-bold text-gray-700">
                    1. Calcium
                  </p>
                  <p className="mb-12 text-lg text-gray-700">
                    One of the important nutrients contained in milk and
                    Calcium is important for your baby's brain health.
                    Calcium is not only important for bone health, however
                    also helps brain development. The body needs calcium
                    so that muscles can move and help nerves carry messages
                    from the brain to the whole body. Calcium also helps vessels
                    blood circulates blood throughout the body and helps
                    releases hormones that are important for the body.
                  </p>
                  <p className="mb-6 text-3xl leading-snug font-bold text-gray-700">
                    2. Protein
                  </p>
                  <p className="mb-12 text-lg text-gray-700">
                    Central nervous system, organs that include the brain and marrow
                    spine, requires a certain amount of amino acids
                    found in protein foods. Amino acids such as
                    tryptophan, tyrosine, histidine and arginine are required in order
                    the brain can function normally.
                  </p>
                  <p className="mb-6 text-3xl leading-snug font-bold text-gray-700">
                    3. Omega-3 fatty acids
                  </p>
                  <p className="mb-12 text-lg text-gray-700">
                    As mentioned earlier, milk is fortified
                    Polyunsaturated fatty acids (PUFA) have a good effect on
                    children's cognitive function. Well, one type of PUFA that can be
                    found in milk is omega 3. Omega 3 is an acid
                    Polyunsaturated fats are important for cognitive performance in
                    all stages of life. Eicosapentaenoic Acid (EPA),
                    Docosahexaenoic Acid (DHA), and Alpha-linolenic Acid (ALA)
                    are omega 3 and all three are essential for function
                    brain. Research shows, consuming omega-3
                    improves cognitive function, learning, memory, and
                    improve blood flow in the brain.
                  </p>
                  <p className="mb-6 text-3xl leading-snug font-bold text-gray-700">
                    4. Vitamin D
                  </p>
                  <p className="mb-12 text-lg text-gray-700">
                    Vitamin D is very important for us because Vitamin D helps
                    regulation of calcium in the body so that the body functions normally
                    and is also useful for bone formation. Besides that,
                    Vitamin D also plays an important role in
                    brain and nerve development. Mother can get vitamins
                    D by sunbathing for 10-15 minutes in the sun
                    rising until 9 am or from 3 pm until
                    Sunset. Apart from that, Mother also gets it
                    Vitamin D from foods such as fish, red meat,
                    chicken or beef liver, egg yolk and similar food products
                    Fortified like formula milk.
                  </p>
                </div>
                <div className="col-span-4 flex flex-col">
                  <div className="flex flex-col">
                    <p className="text-primary600 text-xl font-bold my-4">
                      Read Next
                    </p>
                    <div className="flex flex-col gap-6">
                      {data.map((item, index) => (
                        <a href={`${item.slug}`} key={index}>
                          <div className="grid lg:grid-cols-3 gap-4">
                            <img
                              className="w-full h-full col-span-1 rounded-lg"
                              src={`/img/${item.imgTitle}`}
                              alt="Wise Parent Hero"
                            />

                            <div className="flex flex-col col-span-2 gap-2">
                              <div className="flex flex-row gap-2">
                                {item.category.map((tags, index) => (
                                  <p
                                    key={index}
                                    className="text-xs px-2 py-1 bg-secondary600 text-white rounded-lg"
                                  >
                                    {tags}
                                  </p>
                                ))}
                              </div>
                              <p className="font-semibold text-md">
                                {item.title}
                              </p>
                            </div>
                          </div>
                        </a>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ) : slug === "effective-ways-to-educate-children-to-be-smart-and-intelligent" ? (
              <div className="grid lg:grid-cols-12 gap-12">
                <div className="col-span-8 flex flex-col">
                  <div className="col-span-8 flex flex-col">
                    <p className="text-4xl font-semibold leading-snug">
                      Effective Ways to Educate Children to Be Smart and Intelligent
                    </p>
                    <div className="flex flex-row justify-between md:justify-start gap-4 my-4">
                      <p className="text-lg font-semibold text-gray-500">
                        By Admin WiseParent
                      </p>
                      <p className="text-lg font-semibold text-gray-500">|</p>
                      <p className="text-lg font-semibold text-gray-500">
                        Wednesday, March 20 2024
                      </p>
                    </div>
                    <img
                      src="/img/stimulasi.png"
                      alt="artikel"
                      className="mt-4"
                    />
                    <p className="my-12 text-lg text-gray-700">
                      Mother, as a parent certainly hopes for your little one
                      can grow up to be smart and intelligent children. Not just
                      so that you can make your child proud, but for the sake of the Fruit's life
                      Heart in the future.
                    </p>
                    <p className="mb-12 text-lg text-gray-700">
                      Smart children are considered to be able to achieve more in
                      school and achieve success in life. Therefore,
                      It's not uncommon for parents to be willing to do anything to get their child
                      smarter, such as enrolling children in programs
                      tutoring/courses. But actually what are the factors?
                      affects children's intelligence and is there a way to make children
                      be smart and effective?
                    </p>
                    <p className="mb-6 text-3xl leading-snug font-bold text-gray-700">
                      Factors that Influence Children's Intelligence
                    </p>
                    <p className="mb-6 text-lg text-gray-700">
                      Researchers have studied intelligence for a long time
                      and the factors that influence it. Like most aspects
                      a person's behavior and cognition, intelligence is a trait
                      complex that is influenced by genetic factors as well
                      environment.
                    </p>
                    <p className="mb-6 text-lg text-gray-700">
                      In terms of genetics, neither is a child's intelligence
                      controlled only by one intelligence gene, but
                      the result of complex interactions between many genes. Factor
                      Genetics is also still influenced by factors
                      The environment also determines how intelligence genes develop
                      that a child has is expressed.
                    </p>
                    <p className="mb-6 text-lg text-gray-700">
                      Then, what environmental factors can influence it
                      child intelligence? The results of a study say, a number of
                      environmental factors such as place of residence, physical activity,
                      family income, to people's education and employment
                      Old age can greatly impact the level of intelligence
                      child.
                    </p>
                    <p className="mb-6 text-lg text-gray-700">
                      Therefore, children must receive a good environment and
                      support in order to develop their intelligence potential
                      optimally.
                    </p>
                    <p className="mb-6 text-lg text-gray-700">
                      The child's intelligence level is also proven to be in line with
                      education. Although it is still a matter of debate because of the connection
                      both can have two meanings. First, that child who
                      smarter people tend to have more education,
                      or secondly, on the contrary, the period of education
                      longer plays a role in increasing children's intelligence.
                    </p>
                    <p className="mb-6 text-lg text-gray-700">
                      Children with intelligence levels above the average usually
                      have different behavior than children
                      his age. Mothers may see the child's characteristics
                      smart and intelligent in your little one, such as:
                    </p>
                    <ul className="mb-12">
                      <li className="text-lg mb-2 text-gray-700">
                        - Have high concentration when doing something
                      </li>
                      <li className="text-lg mb-2 text-gray-700">
                        - Have a high sense of curiosity
                      </li>
                      <li className="text-lg mb-2 text-gray-700">
                        - Learn faster
                      </li>
                      <li className="text-lg mb-2 text-gray-700">
                        - Have a strong memory
                      </li>
                      <li className="text-lg mb-2 text-gray-700">
                        - Imaginative, or
                      </li>
                      <li className="text-lg  text-gray-700">
                        - Talk fluently more quickly.
                      </li>
                    </ul>
                    <p className="mb-6 text-3xl leading-snug font-bold text-gray-700">
                      How to Educate Smart and Intelligent Children
                    </p>
                    <p className="mb-12 text-lg text-gray-700">
                      Regardless of genetic factors or the presence or absence of characteristics
                      the smart child in the child, the way the parents are inside
                      caring for and educating him still plays an important role in
                      form smart and intelligent children.
                    </p>
                    <p className="mb-12 text-lg text-gray-700">
                      Many studies have shown its importance
                      the early years of a child's life in brain development
                      and shape cognitive abilities. In this case, pattern
                      Parental care can determine how intelligent
                      child. Here are some tips on how to educate children to be smart
                      and intelligence that you can practice with the Fruit
                      Heart:
                    </p>
                    <p className="mb-6 text-3xl leading-snug font-bold text-gray-700">
                      1. Get to Know Children's Learning Styles
                    </p>
                    <p className="mb-12 text-lg text-gray-700">
                      Children's learning styles can be divided into three types, namely
                      auditory or understanding through hearing, visual or
                      understand through the senses of sight, and kinesthetics or
                      learn through body movements. Auditory learning style
                      for example through songs or verbally, while visuals can be done
                      through pictures or writing. Meanwhile learning styles
                      kinesthetic, for example with games or practice
                      direct. Understand how your child learns
                      assist their learning with appropriate methods and
                      understand more quickly.
                    </p>
                    <p className="mb-6 text-3xl leading-snug font-bold text-gray-700">
                      2. Create a Comfortable Environment
                    </p>
                    <p className="mb-12 text-lg text-gray-700">
                      The conditions around the child while studying can also be
                      affects his ability to grasp the learning material
                      given by Mother. Create a comfortable atmosphere for children
                      Study. Put away everything that might distract you
                      your little one's attention, such as television or gadgets.
                    </p>
                    <p className="mb-6 text-3xl leading-snug font-bold text-gray-700">
                      3. Instill a Sense of Discipline
                    </p>
                    <p className="mb-12 text-lg text-gray-700">
                      Teaching discipline to children about behavior
                      responsibility and the consequences that will be borne
                      from his own actions. This will encourage children
                      learn to manage their feelings and behavior, and can
                      control yourself.
                    </p>
                    <p className="mb-6 text-3xl leading-snug font-bold text-gray-700">
                      4. Appreciate the Learning Process
                    </p>
                    <p className="mb-12 text-lg text-gray-700">
                      When the results obtained by your little one do not match
                      what you expect, Mother, then keep giving your appreciation
                      the efforts he has made. Appreciate the learning process
                      comparing the results will make the child more confident,
                      don't give up easily, and understand that success is a result
                      hard work.
                    </p>
                    <p className="mb-6 text-3xl leading-snug font-bold text-gray-700">
                      5. Get used to reading from an early age
                    </p>
                    <p className="mb-12 text-lg text-gray-700">
                      Reading is a source of knowledge. You can get used to it
                      Your little one gets into the habit of reading from an early age by reading
                      book together. This method helps children's language skills
                      At the same time, it can strengthen the relationship between parents and children.
                    </p>
                    <p className="mb-6 text-3xl leading-snug font-bold text-gray-700">
                      6. Fulfill your nutritional intake
                    </p>
                    <p className="mb-12 text-lg text-gray-700">
                      Next, what is no less important is making sure
                      children's nutritional needs are met. The brain needs nutrition from
                      healthy food for learning and for growth
                      optimal. A number of nutrients such as DHA and iron
                      plays a role in helping cognitive development and
                      supports the learning process.
                    </p>
                  </div>
                </div>
                <div className="col-span-4 flex flex-col">
                  <div className="flex flex-col">
                    <p className="text-primary600 text-xl font-bold my-4">
                      Read Next
                    </p>
                    <div className="flex flex-col gap-6">
                      {data.map((item, index) => (
                        <a href={`${item.slug}`} key={index}>
                          <div className="grid lg:grid-cols-3 gap-4">
                            <img
                              className="w-full h-full col-span-1 rounded-lg"
                              src={`/img/${item.imgTitle}`}
                              alt="Wise Parent Hero"
                            />

                            <div className="flex flex-col col-span-2 gap-2">
                              <div className="flex flex-row gap-2">
                                {item.category.map((tags, index) => (
                                  <p
                                    key={index}
                                    className="text-xs px-2 py-1 bg-secondary600 text-white rounded-lg"
                                  >
                                    {tags}
                                  </p>
                                ))}
                              </div>
                              <p className="font-semibold text-md">
                                {item.title}
                              </p>
                            </div>
                          </div>
                        </a>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ) : (
              <div className="grid lg:grid-cols-12 gap-12">
                <div className="col-span-8 flex flex-col">
                  <p className="text-4xl font-semibold leading-snug">
                    How to Support Children's Potential in the Digital Era
                  </p>
                  <div className="flex flex-row justify-between md:justify-start gap-4 my-4">
                    <p className="text-lg font-semibold text-gray-500">
                      By Admin WiseParent
                    </p>
                    <p className="text-lg font-semibold text-gray-500">|</p>
                    <p className="text-lg font-semibold text-gray-500">
                      Wednesday, March 20 2024
                    </p>
                  </div>
                  <img src="/img/parenting.png" alt="artikel" className="mt-4" />
                  <p className="my-12 text-lg text-gray-700">
                    Technological advances in the digital era provide many benefits in human life, 
                    such as facilitating communication, searching for information, and helping the learning process.
                    Digital technology is also changing children's lives. 
                    Ease of access makes the internet an inseparable part of their daily lives.
                  </p>
                    <p className="mb-6 text-3xl leading-snug font-bold text-gray-700">
                      How to Support Children's Potential and Recognize Children's Potential from an Early Age
                    </p>
                    <p className="mb-6 text-lg text-gray-700">
                      Every child has their own potential. And it is the parent's job to recognize this potential and encourage it 
                      for the success of their child in the future. Here are several ways you can recognize your little one's potential:
                    </p>
                    <p className="mb-6 text-lg text-gray-700">
                      Observe the child's interest. Mothers can facilitate or support their child's potential by observing what activities they like. 
                      In this way, Mother will know better what her little one's interests and strengths are.
                    </p>
                    <p className="mb-6 text-lg text-gray-700">
                      Develop children's interests by trying various things. Inviting children to try new things can develop children's interests or interests 
                      in certain fields, and is also a way to find out the potential of your little one.
                    </p>
                    <p className="mb-6 text-lg text-gray-700">
                      Consult experts. When you don't feel confident about your little one's talents and potential, consult a teacher or pediatrician.
                    </p>
                    <p className="mb-6 text-lg text-gray-700">
                      Support children to develop their potential. Sometimes, without realizing it, children who appear to have ability or potential 
                      in a particular field, such as music or mathematics, are initially not interested in pursuing it. 
                      For this reason, mothers need to guide and direct
                      their children so that they feel comfortable learning or practicing their abilities so that their potential can develop.
                    </p>
                    <p className="mb-6 text-lg text-gray-700">
                      Children with intelligence levels above the average usually
                      have different behavior than children
                      his age. Mothers may see the child's characteristics
                      smart and intelligent in your little one, such as:
                    </p>
                    <p className="mb-6 text-3xl leading-snug font-bold text-gray-700">
                      Parenting Tips for Using Gadgets in the Digital Era
                    </p>
                    <p className="mb-12 text-lg text-gray-700">
                      Based on a UNICEF report, one in three internet users in the world 
                      is under 18 years old. Meanwhile, teenagers and young adults aged 15-24 years
                      are the most connected group with 71% already using the internet.
                      Along with the great opportunities in the digital era, risks and 
                      dangers emerge that can threaten children, such as gadget addiction,
                      becoming asocial, and even pornography. Meanwhile, children tend to 
                      be more open to their peers than their parents when they experience 
                      problems related to the digital world. So that your little one wants 
                      to open up to his parents, mothers should regularly spend time chatting by asking questions 
                      related to the digital world. For this reason, mothers must understand how to support 
                      children's potential in the digital era.
                    </p>
                    <p className="mb-12 text-lg text-gray-700">
                      Here are some parenting tips for using gadgets with children as well 
                      as tips for supporting children's potential in the digital era:
                    </p>
                    <p className="mb-6 text-3xl leading-snug font-bold text-gray-700">
                      1. Set Limits
                    </p>
                    <p className="mb-12 text-lg text-gray-700">
                      Set limits for children to surf online starting from time, 
                      what sites and applications they can visit, 
                      as well as the attitude they need to adopt when interacting online.
                      Mothers can also activate the parental control feature via special 
                      software on their gadget (cellphone or laptop) which functions to 
                      filter or block certain web content that is not suitable for children.
                    </p>
                    <p className="mb-6 text-3xl leading-snug font-bold text-gray-700">
                      2. Be a Role Model
                    </p>
                    <p className="mb-12 text-lg text-gray-700">
                      Give examples of wise behavior in interacting with the digital world.
                      For example, don't hold the gadget when your child is asking you to
                      play or asking for special attention. Children are great imitators,
                      so limit your online activities, Mom.
                    </p>
                    <p className="mb-6 text-3xl leading-snug font-bold text-gray-700">
                      3. Accompany Children
                    </p>
                    <p className="mb-12 text-lg text-gray-700">
                      Engaging in online activities with children can encourage social interaction, 
                      bonding, and learning. Doing screen time activities together can also be an opportunity 
                      to share good experiences and perspectives on life with children. 
                      Playing games together can be a way to show sportsmanship and game ethics.
                    </p>
                    <p className="mb-6 text-3xl leading-snug font-bold text-gray-700">
                      4. Provide Information on Safety of Internet Use to Children
                    </p>
                    <p className="mb-12 text-lg text-gray-700">
                      To prevent children from experiencing unwanted things from digital use, 
                      mothers should actively provide information related to cyber security. 
                      For example, ask children not to provide personal information before getting permission 
                      from their parents when accessing some sites.
                    </p>
                    <p className="mb-6 text-3xl leading-snug font-bold text-gray-700">
                      Things That Hinder Children's Potential in the Digital Era
                    </p>
                    <ul className="mb-12">
                      <li className="text-lg mb-2 text-gray-700">
                        - Screen Time All the Time
                      </li>
                      <li className="text-lg mb-2 text-gray-700">
                        - Making Technology a Soother for Children
                      </li>
                      <li className="text-lg mb-2 text-gray-700">
                        - Not Handling Appropriately when Children Make Mistakes
                      </li>
                    </ul>
                </div>
                <div className="col-span-4 flex flex-col">
                  <div className="flex flex-col">
                    <p className="text-primary600 text-xl font-bold my-4">
                      Read Next
                    </p>
                    <div className="flex flex-col gap-6">
                      {data.map((item, index) => (
                        <a href={`${item.slug}`} key={index}>
                          <div className="grid lg:grid-cols-3 gap-4">
                            <img
                              className="w-full h-full col-span-1 rounded-lg"
                              src={`/img/${item.imgTitle}`}
                              alt="Wise Parent Hero"
                            />

                            <div className="flex flex-col col-span-2 gap-2">
                              <div className="flex flex-row gap-2">
                                {item.category.map((tags, index) => (
                                  <p
                                    key={index}
                                    className="text-xs px-2 py-1 bg-secondary600 text-white rounded-lg"
                                  >
                                    {tags}
                                  </p>
                                ))}
                              </div>
                              <p className="font-semibold text-md">
                                {item.title}
                              </p>
                            </div>
                          </div>
                        </a>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            )}

            <div className="grid lg:grid-cols-12 gap-12">
              <div className="col-span-8 flex flex-col">
                <div className="bg-gray-200 p-4 rounded-lg">
                  <p className="font-semibold text-lg">Comment</p>
                  <div className="bg-white border-gray-200 shadow-sm py-4 mt-4 rounded-lg">
                    <textarea
                      className="w-full px-4 focus:outline-none"
                      placeholder="Write Comment"
                      value={text}
                      onChange={handleChange}
                      style={{ minHeight: "80px" }} // Set a minimum height to prevent the textarea from becoming too small
                    />
                    <div className="border-b border-gray-200 my-4"></div>
                    <div className="flex flex-row mx-4 justify-between items-center">
                      <p className="text-sm">
                        {1000 - text.length} characters left
                      </p>
                      <button
                        className="text-sm bg-primary500 text-white px-4 py-2"
                        onClick={handleSubmit}
                      >
                        Submit
                      </button>
                    </div>
                  </div>
                </div>

                {/* Render the comments */}
                {comments.map((comment, index) => (
                  <div
                    key={index}
                    className="border border-gray-400 p-4 rounded-lg mt-4"
                  >
                    <div className="flex flex-row gap-2 items-center">
                      <img
                        id="avatarButton"
                        className="w-8 h-8 rounded-full cursor-pointer"
                        src="/img/sampul.jpg"
                        alt="User dropdown"
                      />
                      <div className="flex flex-col">
                        <p className="text-sm">Miori Celesta</p>
                        <p className="text-xs">March, 20 2024</p>
                      </div>
                    </div>

                    <p className="my-2">{comment}</p>
                    <div className="flex flex-row gap-2 items-center">
                      <div className="flex flex-row gap-1 items-center">
                        <img
                          src="/img/laiks.svg"
                          alt="like"
                          className="w-5 h-5"
                        />
                        <p className="text-sm">5</p>
                      </div>
                      <div className="flex flex-row gap-1 items-center">
                        <img
                          src="/img/dislaiks.svg"
                          alt="like"
                          className="w-5 h-5"
                        />
                        <p className="text-sm">5</p>
                      </div>
                      <p className="mx-2">Reply</p>
                      <p className="mx-2">Report</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ArticleDetails;
