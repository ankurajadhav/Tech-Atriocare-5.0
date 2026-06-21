import { motion } from "motion/react";
import { Link } from "react-router-dom";
import { ArrowRight, FileText } from "lucide-react";

export default function ChallengeTerms() {
  return (
    <div className="min-h-screen bg-white pt-20 sm:pt-24 pb-20 sm:pb-32">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 md:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="space-y-8 sm:space-y-12"
        >
          <div className="text-center space-y-4 sm:space-y-6">
            <div className="inline-flex items-center justify-center w-14 h-14 sm:w-16 sm:h-16 rounded-2xl bg-brand-teal/10 text-brand-teal mb-2 sm:mb-4">
              <FileText className="w-7 h-7 sm:w-8 sm:h-8" />
            </div>
            <h1 className="text-2xl sm:text-4xl md:text-5xl font-black text-[#006064] uppercase tracking-tight font-display leading-tight">
              Haal-Chaal Pravartak 1.0
            </h1>
            <p className="text-base sm:text-xl text-slate-600 font-medium tracking-tight">
              India's First Immunity Challenge for Smarter Breathing
            </p>
            <div className="inline-block px-4 py-1.5 bg-blue-50 text-blue-600 rounded-full text-xs sm:text-sm font-black uppercase tracking-widest mt-2">
              Participation fees is INR 500/-
            </div>
          </div>

          <div className="flex justify-center w-full px-2 sm:px-0">
            <a 
              href="https://docs.google.com/forms/d/e/1FAIpQLSfebqYEWS4uKAd-61QfPpMom-bg8aPCaOZQ7pZ-fV4MWx5ZrQ/viewform"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center gap-2 sm:gap-3 px-5 sm:px-8 py-3.5 sm:py-4 bg-brand-teal text-white rounded-xl sm:rounded-full font-black uppercase tracking-wide sm:tracking-widest shadow-xl shadow-brand-teal/20 hover:scale-[1.03] active:scale-95 transition-all text-[11px] sm:text-sm group text-center w-full sm:w-auto"
            >
              <span>Click here to agree to our terms and conditions and participate in the challenge</span>
              <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 flex-shrink-0 group-hover:translate-x-1 transition-transform" />
            </a>
          </div>

          <div className="bg-slate-50 rounded-[28px] sm:rounded-[48px] p-5 sm:p-12 border border-slate-100 shadow-sm mt-8 sm:mt-12">
            <h2 className="text-lg sm:text-2xl md:text-3xl font-black text-[#006064] uppercase tracking-tight mb-6 sm:mb-8 text-center border-b border-slate-200 pb-6 sm:pb-8">
              TERMS AND CONDITIONS <br/>
              <span className="text-brand-teal text-sm sm:text-lg md:text-xl mt-2 block">INDIA'S FIRST IMMUNITY CHALLENGE FOR SMARTER BREATHING</span>
            </h2>

            <div className="space-y-8 sm:space-y-10 text-slate-600 text-xs sm:text-base">
              <p className="font-medium leading-relaxed italic text-slate-500">
                By participating in "India's First Immunity Challenge for Smarter Breathing" (hereinafter referred to as "the Challenge"), you ("the Participant") acknowledge, understand, and agree to be bound by the following Terms and Conditions. Please read them carefully before proceeding with registration and payment.
              </p>

              <section>
                <h3 className="text-sm sm:text-xl font-bold text-[#006064] mb-3 sm:mb-4 font-display uppercase tracking-wider">1. Acceptance of Terms</h3>
                <div className="space-y-3 sm:space-y-4 pl-3 sm:pl-4 border-l-2 border-slate-200">
                  <p>1.1. Your registration for and participation in the Challenge signifies your unconditional acceptance of these Terms and Conditions, as they may be amended from time to time by Tech Atriocare Pvt. Ltd. ("the Company").</p>
                  <p>1.2. The Company reserves the right to modify or update these Terms and Conditions at any time without prior notice. Continued participation after any such changes shall constitute your consent to such changes.</p>
                </div>
              </section>

              <section>
                <h3 className="text-xl font-bold text-[#006064] mb-4 font-display uppercase tracking-wider">2. Eligibility and Registration</h3>
                <div className="space-y-4 pl-4 border-l-2 border-slate-200">
                  <p>2.1. The Challenge is open to individuals residing in India who are e.g., 18 years or older at the time of registration.</p>
                  <div className="space-y-2">
                    <p>2.2. To register, Participants must:</p>
                    <ul className="list-none space-y-2 pl-4">
                      <li>a. Complete the Google Form provided.</li>
                      <li>b. Successfully make the required payment for participation.</li>
                      <li>c. Upon successful payment, Participants will be redirected to the Haal-Chaal Pravartak's WhatsApp chat.</li>
                      <li>d. Initiate contact by sending a "Hi" message, then send "Okay" as prompted.</li>
                    </ul>
                  </div>
                  <p>2.3. The Company reserves the right to refuse registration or disqualify any Participant at its sole discretion if it believes the Participant does not meet eligibility criteria or has violated these Terms.</p>
                  <p>2.4. No company members or related are allowed participating in the contest.</p>
                </div>
              </section>

              <section>
                <h3 className="text-xl font-bold text-[#006064] mb-4 font-display uppercase tracking-wider">3. Challenge Period</h3>
                <div className="space-y-4 pl-4 border-l-2 border-slate-200">
                  <p>3.1. The Challenge will run for a period of seven (7) consecutive days starting from the date of the Participant's successful enrollment and initiation of the WhatsApp chat protocol.</p>
                </div>
              </section>

              <section>
                <h3 className="text-xl font-bold text-[#006064] mb-4 font-display uppercase tracking-wider">4. Challenge Activities and Adherence</h3>
                <div className="space-y-4 pl-4 border-l-2 border-slate-200">
                  <div className="space-y-2">
                    <p>4.1. Humming Voice Notes: Participants are required to send voice notes of 7 seconds humming, two (2) audios per slot, three (3) times a day, within the following time windows:</p>
                    <ul className="list-none space-y-1 pl-4 font-medium text-slate-700">
                      <li>a. 9:00 AM - 11:00 AM IST</li>
                      <li>b. 2:00 PM - 4:00 PM IST</li>
                      <li>c. 9:00 PM - 11:00 PM IST</li>
                    </ul>
                  </div>
                  <p>4.2. Self-Assessment Wellness Questionnaire: Participants will receive a daily self-assessment wellness questionnaire, which must be completed and submitted daily.</p>
                  <div className="space-y-2">
                    <p>4.3. Daily Video Submission: Participants are required to create and submit one (1) video per day, detailing their feelings, or providing a review of the Company's technology, formulation, the Challenge itself, or all of the above.</p>
                    <p className="pl-4 italic text-slate-500">a. Videos can be shared on any social media platform, tagging the Company, or directly shared via the WhatsApp chat if the Participant is not comfortable with public sharing.</p>
                  </div>
                  <p className="font-bold text-amber-700">4.4. Adherence Scoring: Non-adherence to the requirements for voice notes and the daily questionnaire will result in a reduction of the Participant's overall score.</p>
                </div>
              </section>

              <section>
                <h3 className="text-xl font-bold text-[#006064] mb-4 font-display uppercase tracking-wider">5. Scoring and Winner Selection</h3>
                <div className="space-y-4 pl-4 border-l-2 border-slate-200">
                  <div className="space-y-2">
                    <p>5.1. Winners will be announced based on a final scoring system derived from four (4) key parameters:</p>
                    <ul className="list-none space-y-2 pl-4">
                      <li>a. Adherence: Based on timely and complete submission of voice notes.</li>
                      <li>b. Video Submissions: Quality, consistency, and content of daily videos.</li>
                      <li>c. Self-Assessment Wellness Questionnaire: Consistency and completion of daily questionnaires.</li>
                      <li>d. Change in Airway Patency Score: Measured in a lesser time (details of measurement methodology will be provided separately).</li>
                    </ul>
                  </div>
                  <p>5.2. The Company's decision on scoring and winner selection is final and binding. No correspondence will be entered into regarding the results.</p>
                </div>
              </section>

              <section>
                <h3 className="text-xl font-bold text-[#006064] mb-4 font-display uppercase tracking-wider">6. Prizes and Referrals</h3>
                <div className="space-y-6 pl-4 border-l-2 border-slate-200">
                  <div className="space-y-3">
                    <h4 className="font-bold text-[#006064]">6.1. Participant Prizes:</h4>
                    <ul className="list-none space-y-2 pl-4">
                      <li>• <span className="font-bold">Level 1:</span> <span className="text-brand-teal font-black">INR 50,000</span> for the first-place winner.</li>
                      <li>• <span className="font-bold">Level 2:</span> INR 1,500 each for the next ten (10) Participants.</li>
                      <li>• <span className="font-bold">Level 3:</span> INR 1,000 each for the next twenty (20) Participants.</li>
                      <li>• <span className="font-bold">Level 4:</span> INR 500 each for the next thirty (30) Participants.</li>
                    </ul>
                  </div>
                  <div className="space-y-3">
                    <h4 className="font-bold text-[#006064]">6.2. Referral Prizes:</h4>
                    <ul className="list-none space-y-2 pl-4">
                      <li>• <span className="font-bold">Level 1 Referral:</span> <span className="text-brand-teal font-black">INR 5,000</span> to the referrer of the Level 1 winner.</li>
                      <li>• <span className="font-bold">Level 2 Referrals:</span> INR 200 to all referrers of Level 2 winners.</li>
                      <li>• <span className="font-bold">Level 3 Referrals:</span> INR 100 to all referrers of Level 3 winners.</li>
                    </ul>
                  </div>
                  <div className="space-y-2 mt-4 text-sm text-slate-500">
                    <p>6.3. All prize amounts are subject to applicable taxes and deductions as per Indian law. Winners will be responsible for any tax liabilities arising from their prize.</p>
                    <p>6.4. Prizes are non-transferable and non-exchangeable. The Company reserves the right to substitute prizes with items of equal or greater value if advertised prizes become unavailable.</p>
                  </div>
                </div>
              </section>

              <section>
                <h3 className="text-xl font-bold text-[#006064] mb-4 font-display uppercase tracking-wider">7. Disqualification</h3>
                <div className="space-y-4 pl-4 border-l-2 border-slate-200">
                  <div className="space-y-2">
                    <p>7.1. Participants may be disqualified from the Challenge at the Company's sole discretion for, but not limited to, the following reasons:</p>
                    <ul className="list-none space-y-2 pl-4">
                      <li>a. Submitting another person's voice notes or any other content as their own.</li>
                      <li>b. Engaging in any activity intended to disturb, harass, or disadvantage other participants.</li>
                      <li>c. Using any unfair means or fraudulent practices to gain an advantage.</li>
                      <li>d. Violation of any of these Terms and Conditions.</li>
                    </ul>
                  </div>
                  <p>7.2. Disqualified Participants will forfeit any rights to prizes or recognition.</p>
                </div>
              </section>

              <section>
                <h3 className="text-xl font-bold text-[#006064] mb-4 font-display uppercase tracking-wider">8. Intellectual Property and Data Usage</h3>
                <div className="space-y-4 pl-4 border-l-2 border-slate-200">
                  <p>8.1. By participating, you grant the Company a worldwide, royalty-free, perpetual, irrevocable, non-exclusive license to use, reproduce, modify, adapt, publish, translate, create derivative works from, distribute, perform, and display all content (including but not limited to voice notes, videos, questionnaire responses, feedback, and reviews) submitted by you for the Challenge, in any media, for promotional, marketing, research, or other business purposes related to the Challenge or the Company's products and services, without further compensation or notification to you.</p>
                  <p>8.2. You affirm that you own or have the necessary licenses, rights, consents, and permissions to publish the content you submit.</p>
                  <p>8.3. The Company will collect and process personal data provided by Participants in accordance with its Privacy Policy. By participating, you consent to such data collection and processing.</p>
                </div>
              </section>

              <section>
                <h3 className="text-xl font-bold text-[#006064] mb-4 font-display uppercase tracking-wider">9. Disclaimers and Limitation of Liability</h3>
                <div className="space-y-4 pl-4 border-l-2 border-slate-200 text-sm">
                  <p><strong className="text-slate-800">9.1. NO MEDICAL ADVICE:</strong> The Challenge and its components (including breathing exercises, immunity-boosting strategies, and health tips) are intended for general wellness and informational purposes only. They are not intended to be a substitute for professional medical advice, diagnosis, or treatment. Participants should always consult with a qualified healthcare professional before starting any new health regimen, especially if they have pre-existing medical conditions or concerns. The Company does not provide medical advice, and participation in the Challenge should not be construed as such.</p>
                  
                  <p><strong className="text-slate-800">9.2. NO GUARANTEE OF RESULTS:</strong> The Company makes no representations or warranties, express or implied, regarding the effectiveness, safety, or results of participating in the Challenge. Individual results may vary significantly. The Company does not guarantee any specific improvements in respiratory health, immunity, or overall well-being.</p>
                  
                  <div className="space-y-2">
                    <p><strong className="text-slate-800">9.3. TECHNICAL ISSUES & INTERRUPTIONS:</strong> The Company shall not be liable for any losses, damages, or inconvenience caused by:</p>
                    <ul className="list-none space-y-1 pl-4">
                      <li>a. Technical failures, internet outages, server downtime, or disruptions to communication networks beyond its reasonable control.</li>
                      <li>b. Delays or failures in the transmission or receipt of voice notes, videos, questionnaire responses, or any other data.</li>
                      <li>c. Errors, omissions, or malfunctions in the Google Form, WhatsApp chat, mobile app, website, or any associated platforms used for the Challenge.</li>
                      <li>d. Any virus, bug, tampering, unauthorized intervention, fraud, or technical failures that could corrupt or affect the administration, security, fairness, integrity, or proper conduct of the Challenge.</li>
                    </ul>
                  </div>

                  <div className="space-y-2">
                    <p><strong className="text-slate-800">9.4. PARTICIPANT'S RESPONSIBILITY:</strong> Participants are solely responsible for:</p>
                    <ul className="list-none space-y-1 pl-4">
                      <li>a. Ensuring their devices and internet connection are adequate to participate in the Challenge.</li>
                      <li>b. Maintaining the confidentiality of their login credentials and WhatsApp account.</li>
                      <li>c. The content and accuracy of all submissions (voice notes, videos, questionnaire responses).</li>
                      <li>d. Adhering to all instructions and guidelines provided by the Company.</li>
                    </ul>
                  </div>

                  <div className="space-y-2">
                    <p><strong className="text-slate-800">9.5. RELEASE AND INDEMNIFICATION:</strong> By participating, you hereby release, discharge, and hold harmless the Company, its affiliates, directors, officers, employees, agents, and representatives from and against any and all claims, demands, liabilities, suits, actions, causes of action, losses, costs, and expenses (including reasonable attorney's fees) arising out of or in connection with your participation in the Challenge, including, without limitation:</p>
                    <ul className="list-none space-y-1 pl-4">
                      <li>a. Any injury, illness, death, loss, or damage to person or property, whether direct or indirect, arising from or related to your participation in the Challenge or the use of any prize.</li>
                      <li>b. Any reliance on information or advice provided as part of the Challenge.</li>
                      <li>c. Any claim related to the use of your submitted content as per Clause 8.1.</li>
                      <li>d. Any disqualification due to non-adherence or violation of these Terms.</li>
                    </ul>
                  </div>

                  <p><strong className="text-slate-800">9.6. LIMITATION OF LIABILITY:</strong> In no event shall the Company be liable for any indirect, incidental, consequential, special, punitive, or exemplary damages, including but not limited to, loss of profits, revenue, data, or goodwill, arising out of or in connection with the Challenge, whether based on warranty, contract, tort (including negligence), or any other legal theory, even if the Company has been advised of the possibility of such damages. The Company's total cumulative liability to you for any and all claims arising out of or in connection with these Terms or the Challenge shall not exceed the amount paid by you to participate in the Challenge.</p>
                </div>
              </section>

              <section>
                <h3 className="text-xl font-bold text-[#006064] mb-4 font-display uppercase tracking-wider">10. Governing Law & Jurisdiction</h3>
                <div className="space-y-2 pl-4 border-l-2 border-slate-200">
                  <p>10.1. These Terms and Conditions shall be governed by and construed in accordance with the laws of India.</p>
                  <p>10.2. Any disputes arising out of or in connection with the Challenge or these Terms shall be subject to the exclusive jurisdiction of the courts located in Delhi.</p>
                </div>
              </section>

              <section>
                <h3 className="text-xl font-bold text-[#006064] mb-4 font-display uppercase tracking-wider">11. Severability</h3>
                <div className="space-y-2 pl-4 border-l-2 border-slate-200">
                  <p>11.1. If any provision of these Terms and Conditions is found to be invalid or unenforceable by a court of competent jurisdiction, such provision shall be severed from the remainder of these Terms, which will otherwise remain in full force and effect.</p>
                </div>
              </section>

              <section>
                <h3 className="text-xl font-bold text-[#006064] mb-4 font-display uppercase tracking-wider">12. Entire Agreement</h3>
                <div className="space-y-2 pl-4 border-l-2 border-slate-200">
                  <p>12.1. These Terms and Conditions constitute the entire agreement between the Participant and the Company concerning the Challenge and supersede all prior or contemporaneous communications, representations, or agreements, whether oral or written.</p>
                </div>
              </section>

              <section className="pt-8 sm:pt-12 border-t border-slate-200 mt-8 sm:mt-12 text-center md:text-left flex flex-col md:flex-row items-center justify-between gap-4 sm:gap-6">
                <div>
                  <h4 className="text-sm sm:text-lg font-black text-[#006064] uppercase tracking-tight font-display mb-1 sm:mb-2">Tech Atriocare Pvt. Ltd.</h4>
                  <p className="text-slate-500 text-xs sm:text-sm leading-relaxed">
                    Krastay, Saidulajab, Saiyad Ul Ajaib Village, <br className="hidden md:block" /> 
                    Sainik Farm, New Delhi, Delhi 110030
                  </p>
                </div>
                <div>
                  <a href="mailto:service.techatriocare@gmail.com" className="text-brand-teal font-black text-sm sm:text-lg hover:underline transition-all break-all">
                    service.techatriocare@gmail.com
                  </a>
                </div>
              </section>
            </div>
          </div>

          <div className="pt-6 sm:pt-8 flex flex-col items-center gap-4 sm:gap-6 w-full px-2 sm:px-0">
            <a 
              href="https://docs.google.com/forms/d/e/1FAIpQLSfebqYEWS4uKAd-61QfPpMom-bg8aPCaOZQ7pZ-fV4MWx5ZrQ/viewform"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center gap-2 sm:gap-3 px-5 sm:px-10 py-3.5 sm:py-5 bg-slate-900 hover:bg-brand-teal text-white rounded-xl sm:rounded-full font-black uppercase tracking-wide sm:tracking-widest shadow-xl shadow-slate-900/20 hover:shadow-brand-teal/20 hover:scale-[1.03] transition-all text-[11px] sm:text-sm group text-center w-full sm:w-auto"
            >
              <span>Click here to agree to our terms and conditions and participate in the challenge</span>
              <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 flex-shrink-0 group-hover:translate-x-1 transition-transform" />
            </a>
            <Link to="/haal-chaal" className="text-slate-400 font-bold text-[11px] sm:text-xs uppercase tracking-widest hover:text-brand-teal transition-colors mt-2">
              Back to Haal-Chaal
            </Link>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
