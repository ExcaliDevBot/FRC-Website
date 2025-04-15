import React, {useState} from 'react';
import {
    Heading as Bread,
    Wine,
    Scroll,
    Flame,
    Heart,
    Clock,
    Book,
    Music,
    Utensils,
    Trophy
} from 'lucide-react';

function LearnJewish() {
    const [showShabbatTips, setShowShabbatTips] = useState(false);
    const [showPassoverTips, setShowPassoverTips] = useState(false);
    const [activeShabbatTab, setActiveShabbatTab] = useState<'basics' | 'traditions' | 'facts'>('basics');
    const [activePassoverTab, setActivePassoverTab] = useState<'story' | 'seder' | 'food'>('story');

    const TabButton = ({isActive, onClick, children}: {
        isActive: boolean;
        onClick: () => void;
        children: React.ReactNode
    }) => (
        <button
            onClick={onClick}
            className={`px-4 py-2 rounded-full text-sm transition-all ${
                isActive
                    ? 'bg-indigo-600 text-white'
                    : 'bg-indigo-50 text-indigo-600 hover:bg-indigo-100'
            }`}
        >
            {children}
        </button>
    );

    return (
        <div className="min-h-screen bg-gradient-to-b from-blue-50 to-purple-50">
            {/* Main Content */}
            <main className="max-w-7xl mx-auto p-6">

                {/* Hero Message */}
                <section id="message" className="mb-12 pt-8">
                    <div
                        className="bg-gradient-to-r from-[#012265] to-[#1a3a8f] rounded-2xl p-6 md:p-8 border border-[#d4af37]">
                        <div className="flex items-center gap-3 mb-6">
                            <Trophy className="h-10 w-10 text-[#d4af37]"/>
                            <h2 className="text-2xl md:text-3xl font-bold text-[#d4af37]">Why We're Not Competing
                                Today</h2>
                        </div>
                        <p className="text-lg mb-6 leading-relaxed text-white">
                            Hey fellow FIRST member! 🤖
                        </p>
                        <p className="text-lg mb-6 leading-relaxed text-white">
                            While our hearts are with the competition,
                            we're observing some really important traditions that are core to who we are.
                            Just like how we put our all into building amazing robots, we're equally passionate
                            about our Jewish heritage and values!
                        </p>
                        <div className="grid md:grid-cols-2 gap-6">
                            <div className="bg-[#012265]/50 p-4 rounded-xl border border-[#d4af37]/30">
                                <h3 className="text-[#d4af37] font-semibold mb-2 ">Our Team Spirit</h3>
                                <p className={"text-white"}>We're cheering for everyone from afar! Our robot might not
                                    be on the field,
                                    but our spirit of innovation and dedication remains strong! 🌟</p>
                            </div>
                            <div className="bg-[#012265]/50 p-4 rounded-xl border border-[#d4af37]/30">
                                <h3 className="text-[#d4af37] font-semibold mb-2">Values First</h3>
                                <p className={"text-white"}>Sometimes the toughest choices show what we truly value.
                                    We're proud to
                                    represent both our technical skills and our cultural heritage! </p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Shabbat Section */}

                <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
                    {/* Hero Section */}
                    <div className="relative">
                        <div
                            className="h-96 bg-cover bg-center"
                            style={{
                                backgroundImage: 'url("/jewish/shabbat.png")',
                            }}
                        />
                        <div
                            className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end">
                            <div className="p-8 text-white">
                                <h1 className="text-5xl font-bold mb-4">Shabbat</h1>
                                <p className="text-xl max-w-2xl">
                                    Our weekly digital detox! Discover the magic of Shabbat -
                                    25 hours of pure disconnection from our devices, relaxation, and spiritual vibes.
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="p-8">
                        {/* Tabs */}
                        <div className="flex gap-3 mb-8 overflow-x-auto pb-2">
                            <TabButton
                                isActive={activeShabbatTab === 'basics'}
                                onClick={() => setActiveShabbatTab('basics')}
                            >
                                The Basics
                            </TabButton>
                            <TabButton
                                isActive={activeShabbatTab === 'traditions'}
                                onClick={() => setActiveShabbatTab('traditions')}
                            >
                                Traditions
                            </TabButton>
                            <TabButton
                                isActive={activeShabbatTab === 'facts'}
                                onClick={() => setActiveShabbatTab('facts')}
                            >
                                Fun Facts
                            </TabButton>
                        </div>

                        {/* Basics Tab */}
                        <div className={activeShabbatTab === 'basics' ? 'block' : 'hidden'}>
                            <div className="grid md:grid-cols-2 gap-8 mb-8">
                                <div className="bg-gradient-to-br from-orange-50 to-red-50 p-6 rounded-xl">
                                    <h3 className="flex items-center gap-2 text-xl font-semibold text-orange-700 mb-4">
                                        <Clock className="h-5 w-5"/>
                                        When is Shabbat?
                                    </h3>
                                    <p className="text-orange-800 mb-4">
                                        Shabbat starts at sunset on Friday and ends when you can see three stars in
                                        the sky on Saturday night
                                        (about an hour after sunset). That's roughly 25 hours of pure chill time! 🌅
                                    </p>
                                    <div className="bg-white/50 p-4 rounded-lg">
                                        <p className="text-orange-900 font-medium">
                                            "Remember the Sabbath day and keep it holy." — Exodus 20:8
                                        </p>
                                    </div>
                                </div>

                                <div className="bg-gradient-to-br from-purple-50 to-blue-50 p-6 rounded-xl">
                                    <h3 className="flex items-center gap-2 text-xl font-semibold text-purple-700 mb-4">
                                        <Heart className="h-5 w-5"/>
                                        Why is it Special?
                                    </h3>
                                    <p className="text-purple-800 mb-4">
                                        Think of Shabbat as your weekly reset button! It's like a spiritual spa day
                                        where you:
                                    </p>
                                    <ul className="space-y-2 text-purple-800">
                                        <li>• Unplug from technology</li>
                                        <li>• Connect with family & friends IRL</li>
                                        <li>• Take a break from homework & stress</li>
                                        <li>• Focus on what really matters</li>
                                    </ul>
                                </div>
                            </div>

                            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 p-6 rounded-xl mb-8">
                                <h3 className="text-xl font-semibold text-blue-800 mb-4">
                                    🌟 Quick Guide to Shabbat Vibes
                                </h3>
                                <div className="grid md:grid-cols-3 gap-6">
                                    <div className="bg-white/50 p-4 rounded-lg">
                                        <h4 className="font-semibold text-blue-900 mb-2">Friday Night</h4>
                                        <p className="text-blue-800">
                                            Light candles, share a feast, sing songs, and kick off your digital
                                            detox in style!
                                        </p>
                                    </div>
                                    <div className="bg-white/50 p-4 rounded-lg">
                                        <h4 className="font-semibold text-blue-900 mb-2">Saturday</h4>
                                        <p className="text-blue-800">
                                            Sleep in, hang with friends, read, play games, or just chill - no
                                            pressure!
                                        </p>
                                    </div>
                                    <div className="bg-white/50 p-4 rounded-lg">
                                        <h4 className="font-semibold text-blue-900 mb-2">Saturday Night</h4>
                                        <p className="text-blue-800">
                                            End with Havdalah - a beautiful ceremony with wine, spices, and a cool
                                            braided candle!
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Traditions Tab */}
                        <div className={activeShabbatTab === 'traditions' ? 'block' : 'hidden'}>
                            <div className="grid md:grid-cols-2 gap-8 mb-8">
                                <div>
                                    <div
                                        className="bg-gradient-to-br from-amber-50 to-orange-50 p-6 rounded-xl mb-6">
                                        <h3 className="flex items-center gap-2 text-xl font-semibold text-amber-700 mb-4">
                                            <Flame className="h-5 w-5"/>
                                            Candle Lighting
                                        </h3>
                                        <p className="text-amber-800 mb-4">
                                            We kick off Shabbat by lighting at least two candles. It's a magical
                                            moment that
                                            transforms regular time into sacred time. ✨
                                        </p>
                                        <div className="bg-white/50 p-4 rounded-lg">
                                            <p className="text-amber-900">
                                                Pro tip: Many add an extra candle for each family member, making the
                                                room even more bright and beautiful!
                                            </p>
                                        </div>
                                    </div>

                                    <div className="bg-gradient-to-br from-emerald-50 to-teal-50 p-6 rounded-xl">
                                        <h3 className="flex items-center gap-2 text-xl font-semibold text-emerald-700 mb-4">
                                            <Wine className="h-5 w-5"/>
                                            Kiddush & Challah
                                        </h3>
                                        <p className="text-emerald-800 mb-4">
                                            We say blessings over wine (or grape juice) and two loaves of challah
                                            bread.
                                            The double portions remind us of the extra portion of manna that fell
                                            before Shabbat
                                            in the desert. 🍷🍞
                                        </p>
                                    </div>
                                </div>

                                <div>
                                    <div
                                        className="h-80 bg-cover bg-center rounded-xl mb-6"
                                        style={{
                                            backgroundImage:
                                                'url("https://images.unsplash.com/photo-1612392061787-2d078b3e573c?auto=format&fit=crop&q=80")',
                                        }}
                                    />
                                    <div className="bg-gradient-to-br from-rose-50 to-pink-50 p-6 rounded-xl">
                                        <h3 className="flex items-center gap-2 text-xl font-semibold text-rose-700 mb-4">
                                            <Music className="h-5 w-5"/>
                                            Songs & Blessings
                                        </h3>
                                        <p className="text-rose-800">
                                            Shabbat meals are filled with beautiful songs and blessings. Some
                                            favorites include:
                                        </p>
                                        <ul className="mt-3 space-y-2 text-rose-800">
                                            <li>• Shalom Aleichem (Welcome, Angels!)</li>
                                            <li>• Eishet Chayil (Woman of Valor)</li>
                                            <li>• Blessing the Children</li>
                                            <li>• Zimrot (Shabbat Table Songs)</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Fun Facts Tab */}
                        <div className={activeShabbatTab === 'facts' ? 'block' : 'hidden'}>
                            <div className="grid md:grid-cols-2 gap-8">
                                <div>
                                    <div
                                        className="bg-gradient-to-br from-amber-50 to-yellow-50 p-6 rounded-xl mb-6">
                                        <h3 className="text-xl font-semibold text-amber-800 mb-4">
                                            🤔 Did You Know?
                                        </h3>
                                        <ul className="space-y-4">
                                            <li className="bg-white/50 p-4 rounded-lg text-amber-900">
                                                The word "Shabbat" comes from the Hebrew word "לשבות" (lishbot)
                                                which means "to rest" or "to cease."
                                            </li>
                                            <li className="bg-white/50 p-4 rounded-lg text-amber-900">
                                                The tradition of two challah loaves comes from the double portion
                                                of manna that fell on Friday during the 40 years in the desert.
                                            </li>
                                            <li className="bg-white/50 p-4 rounded-lg text-amber-900">
                                                Shabbat is considered more important than most other Jewish holidays
                                                (except Yom Kippur)!
                                            </li>
                                        </ul>
                                    </div>

                                    <div className="bg-gradient-to-br from-emerald-50 to-green-50 p-6 rounded-xl">
                                        <h3 className="text-xl font-semibold text-emerald-800 mb-4">
                                            🌍 Global Shabbat
                                        </h3>
                                        <p className="text-emerald-800 mb-4">
                                            Jews around the world celebrate Shabbat with their own unique customs:
                                        </p>
                                        <ul className="space-y-3 text-emerald-800">
                                            <li>• Moroccan Jews serve hot fish for Friday night dinner</li>
                                            <li>• Hungarian Jews sprinkle salt on their challah instead of dipping
                                                it
                                            </li>
                                            <li>• Yemenite Jews eat Jachnun, a pastry slow-cooked overnight</li>
                                        </ul>
                                    </div>
                                </div>

                                <div>
                                    <div
                                        className="bg-gradient-to-br from-blue-50 to-indigo-50 p-6 rounded-xl mb-6">
                                        <h3 className="text-xl font-semibold text-blue-800 mb-4">
                                            📚 By the Numbers
                                        </h3>
                                        <div className="grid grid-cols-2 gap-4">
                                            <div className="bg-white/50 p-4 rounded-lg">
                                                <h4 className="font-semibold text-blue-900 mb-2">25</h4>
                                                <p className="text-blue-800">Hours of Shabbat</p>
                                            </div>
                                            <div className="bg-white/50 p-4 rounded-lg">
                                                <h4 className="font-semibold text-blue-900 mb-2">2+</h4>
                                                <p className="text-blue-800">Shabbat candles lit</p>
                                            </div>
                                            <div className="bg-white/50 p-4 rounded-lg">
                                                <h4 className="font-semibold text-blue-900 mb-2">3</h4>
                                                <p className="text-blue-800">Festive meals enjoyed</p>
                                            </div>
                                            <div className="bg-white/50 p-4 rounded-lg">
                                                <h4 className="font-semibold text-blue-900 mb-2">52</h4>
                                                <p className="text-blue-800">Shabbats per year</p>
                                            </div>
                                        </div>
                                    </div>

                                    <div
                                        className="h-64 bg-cover bg-center rounded-xl mb-6"
                                        style={{
                                            backgroundImage:
                                                'url("https://images.unsplash.com/photo-1533143562855-d018b598aef0?auto=format&fit=crop&q=80")',
                                        }}
                                    />

                                    <div className="bg-gradient-to-br from-purple-50 to-violet-50 p-6 rounded-xl">
                                        <h3 className="text-xl font-semibold text-purple-800 mb-4">
                                            ⭐ Fun Fact Challenge
                                        </h3>
                                        <p className="text-purple-800 mb-4">
                                            Share these cool Shabbat facts with your friends and family! How many
                                            did they already know?
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>


                {/* Passover Section */}
                <div className="bg-white rounded-2xl shadow-xl overflow-hidden mt-12">
                    {/* Hero Section */}
                    <div className="relative">
                        <div
                            className="h-96 bg-cover bg-center"
                            style={{
                                backgroundImage: 'url("/jewish/passover.jpg")',
                            }}
                        />
                        <div
                            className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end">
                            <div className="p-8 text-white">
                                <h1 className="text-5xl font-bold mb-4">Passover</h1>
                                <p className="text-xl max-w-2xl">
                                    The ultimate freedom festival! Eight days of amazing food,
                                    storytelling, and celebrating our journey from slavery to freedom. 🌊✨
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="p-8">
                        {/* Tabs */}
                        <div className="flex gap-3 mb-8 overflow-x-auto pb-2">
                            <TabButton
                                isActive={activePassoverTab === 'story'}
                                onClick={() => setActivePassoverTab('story')}
                            >
                                The Story
                            </TabButton>
                            <TabButton
                                isActive={activePassoverTab === 'seder'}
                                onClick={() => setActivePassoverTab('seder')}
                            >
                                Seder Night
                            </TabButton>
                            <TabButton
                                isActive={activePassoverTab === 'food'}
                                onClick={() => setActivePassoverTab('food')}
                            >
                                Food Guide
                            </TabButton>
                        </div>

                        {/* Story Tab */}
                        <div className={activePassoverTab === 'story' ? 'block' : 'hidden'}>
                            <div className="grid md:grid-cols-2 gap-8 mb-8">
                                <div>
                                    <div
                                        className="bg-gradient-to-br from-amber-50 to-orange-50 p-6 rounded-xl mb-6">
                                        <h3 className="flex items-center gap-2 text-xl font-semibold text-amber-700 mb-4">
                                            <Book className="h-5 w-5"/>
                                            The Exodus Story
                                        </h3>
                                        <p className="text-amber-800 mb-4">
                                            Over 3,000 years ago, our ancestors were slaves in Egypt.
                                            Moses demanded Pharaoh "Let my people go!" but he refused.
                                            Then came the 10 plagues... 🐸
                                        </p>
                                        <div className="bg-white/50 p-4 rounded-lg">
                                            <p className="text-amber-900">
                                                The name "Passover" comes from how the final plague
                                                "passed over" the Jewish homes marked with lamb's blood.
                                            </p>
                                        </div>
                                    </div>

                                    <div className="bg-gradient-to-br from-red-50 to-rose-50 p-6 rounded-xl">
                                        <h3 className="text-xl font-semibold text-red-700 mb-4">
                                            The 10 Plagues
                                        </h3>
                                        <div className="grid grid-cols-2 gap-3 text-red-800">
                                            <div className="bg-white/50 p-3 rounded-lg">1. Blood 🩸</div>
                                            <div className="bg-white/50 p-3 rounded-lg">2. Frogs 🐸</div>
                                            <div className="bg-white/50 p-3 rounded-lg">3. Lice 🦟</div>
                                            <div className="bg-white/50 p-3 rounded-lg">4. Wild Animals 🦁</div>
                                            <div className="bg-white/50 p-3 rounded-lg">5. Cattle Disease 🐄</div>
                                            <div className="bg-white/50 p-3 rounded-lg">6. Boils 🤒</div>
                                            <div className="bg-white/50 p-3 rounded-lg">7. Hail ⛈️</div>
                                            <div className="bg-white/50 p-3 rounded-lg">8. Locusts 🦗</div>
                                            <div className="bg-white/50 p-3 rounded-lg">9. Darkness 🌑</div>
                                            <div className="bg-white/50 p-3 rounded-lg">10. Death of Firstborn 💔
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div>
                                    <div
                                        className="h-80 bg-cover bg-center rounded-xl mb-6"
                                        style={{
                                            backgroundImage: 'url("https://images.theconversation.com/files/589208/original/file-20240419-16-p9xoa7.jpg?ixlib=rb-4.1.0&rect=0%2C22%2C1022%2C510&q=45&auto=format&w=1356&h=668&fit=crop")',
                                        }}
                                    />
                                    <div className="bg-gradient-to-br from-blue-50 to-indigo-50 p-6 rounded-xl">
                                        <h3 className="flex items-center gap-2 text-xl font-semibold text-blue-700 mb-4">
                                            <Scroll className="h-5 w-5"/>
                                            The Great Escape
                                        </h3>
                                        <p className="text-blue-800 mb-4">
                                            After the final plague, Pharaoh finally let the Israelites go.
                                            They left in such a hurry that their bread didn't have time to rise -
                                            that's why we eat matzah! 🫓
                                        </p>
                                        <div className="bg-white/50 p-4 rounded-lg">
                                            <p className="text-blue-900">
                                                The journey through the split Red Sea and receiving the Torah
                                                at Mount Sinai were just the beginning of our amazing story of
                                                freedom!
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Seder Tab */}
                        <div className={activePassoverTab === 'seder' ? 'block' : 'hidden'}>
                            <div className="grid md:grid-cols-2 gap-8 mb-8">
                                <div>
                                    <div
                                        className="bg-gradient-to-br from-emerald-50 to-green-50 p-6 rounded-xl mb-6">
                                        <h3 className="flex items-center gap-2 text-xl font-semibold text-emerald-700 mb-4">
                                            <Wine className="h-5 w-5"/>
                                            The Seder Plate
                                        </h3>
                                        <div className="grid grid-cols-2 gap-4 text-emerald-800">
                                            <div className="bg-white/50 p-3 rounded-lg">
                                                <strong>Zeroa</strong>
                                                <p>Shankbone - Sacrifice</p>
                                            </div>
                                            <div className="bg-white/50 p-3 rounded-lg">
                                                <strong>Beitzah</strong>
                                                <p>Egg - New life</p>
                                            </div>
                                            <div className="bg-white/50 p-3 rounded-lg">
                                                <strong>Maror</strong>
                                                <p>Bitter herbs - Slavery</p>
                                            </div>
                                            <div className="bg-white/50 p-3 rounded-lg">
                                                <strong>Charoset</strong>
                                                <p>Sweet paste - Mortar</p>
                                            </div>
                                            <div className="bg-white/50 p-3 rounded-lg">
                                                <strong>Karpas</strong>
                                                <p>Vegetable - Spring</p>
                                            </div>
                                            <div className="bg-white/50 p-3 rounded-lg">
                                                <strong>Chazeret</strong>
                                                <p>More bitter herbs</p>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="bg-gradient-to-br from-purple-50 to-violet-50 p-6 rounded-xl">
                                        <h3 className="text-xl font-semibold text-purple-700 mb-4">
                                            The Four Questions
                                        </h3>
                                        <p className="text-purple-800 mb-4">
                                            The youngest person at the Seder asks these questions:
                                        </p>
                                        <ol className="space-y-3 text-purple-800">
                                            <li>1. Why do we eat only matzah?</li>
                                            <li>2. Why do we eat bitter herbs?</li>
                                            <li>3. Why do we dip twice?</li>
                                            <li>4. Why do we recline?</li>
                                        </ol>
                                    </div>
                                </div>

                                <div>
                                    <div
                                        className="bg-gradient-to-br from-amber-50 to-yellow-50 p-6 rounded-xl mb-6">
                                        <h3 className="text-xl font-semibold text-amber-700 mb-4">
                                            15 Steps of the Seder
                                        </h3>
                                        <div className="grid grid-cols-3 gap-3 text-amber-800">
                                            <div className="bg-white/50 p-2 rounded-lg text-center">Kadesh</div>
                                            <div className="bg-white/50 p-2 rounded-lg text-center">Urchatz</div>
                                            <div className="bg-white/50 p-2 rounded-lg text-center">Karpas</div>
                                            <div className="bg-white/50 p-2 rounded-lg text-center">Yachatz</div>
                                            <div className="bg-white/50 p-2 rounded-lg text-center">Maggid</div>
                                            <div className="bg-white/50 p-2 rounded-lg text-center">Rachtzah</div>
                                            <div className="bg-white/50 p-2 rounded-lg text-center">Motzi</div>
                                            <div className="bg-white/50 p-2 rounded-lg text-center">Matzah</div>
                                            <div className="bg-white/50 p-2 rounded-lg text-center">Maror</div>
                                            <div className="bg-white/50 p-2 rounded-lg text-center">Korech</div>
                                            <div className="bg-white/50 p-2 rounded-lg text-center">Shulchan Orech
                                            </div>
                                            <div className="bg-white/50 p-2 rounded-lg text-center">Tzafun</div>
                                            <div className="bg-white/50 p-2 rounded-lg text-center">Barech</div>
                                            <div className="bg-white/50 p-2 rounded-lg text-center">Hallel</div>
                                            <div className="bg-white/50 p-2 rounded-lg text-center">Nirtzah</div>
                                        </div>
                                    </div>

                                    <div
                                        className="h-48 bg-cover bg-center rounded-xl mb-6"
                                        style={{
                                            backgroundImage:
                                                'url("https://sivanrahavmeir.com/wp-content/uploads/2022/04/WhatsApp-Image-2022-04-11-at-00.54.25.jpeg")',
                                        }}
                                    />

                                    <div className="bg-gradient-to-br from-red-50 to-rose-50 p-6 rounded-xl">
                                        <h3 className="text-xl font-semibold text-red-700 mb-4">
                                            Four Cups of Wine
                                        </h3>
                                        <div className="grid grid-cols-2 gap-4 text-red-800">
                                            <div className="bg-white/50 p-3 rounded-lg">
                                                <strong>1st Cup</strong>
                                                <p>Sanctification</p>
                                            </div>
                                            <div className="bg-white/50 p-3 rounded-lg">
                                                <strong>2nd Cup</strong>
                                                <p>Deliverance</p>
                                            </div>
                                            <div className="bg-white/50 p-3 rounded-lg">
                                                <strong>3rd Cup</strong>
                                                <p>Redemption</p>
                                            </div>
                                            <div className="bg-white/50 p-3 rounded-lg">
                                                <strong>4th Cup</strong>
                                                <p>Praise</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Food Guide Tab */}
                        <div className={activePassoverTab === 'food' ? 'block' : 'hidden'}>
                            <div className="grid md:grid-cols-2 gap-8">
                                <div>
                                    <div
                                        className="bg-gradient-to-br from-orange-50 to-amber-50 p-6 rounded-xl mb-6">
                                        <h3 className="flex items-center gap-2 text-xl font-semibold text-orange-700 mb-4">
                                            <Bread className="h-5 w-5"/>
                                            All About Matzah
                                        </h3>
                                        <p className="text-orange-800 mb-4">
                                            Matzah is the OG flatbread! Made with just flour and water,
                                            it must be baked in under 18 minutes to prevent rising.
                                        </p>
                                        <div className="bg-white/50 p-4 rounded-lg">
                                            <h4 className="font-semibold text-orange-900 mb-2">Cool Matzah
                                                Facts</h4>
                                            <ul className="space-y-2 text-orange-800">
                                                <li>• Called "bread of affliction" and "bread of freedom"</li>
                                                <li>• Square machine matzah was invented in 1838</li>
                                                <li>• Some make it round and handmade (Shmura)</li>
                                            </ul>
                                        </div>
                                    </div>

                                    <div className="bg-gradient-to-br from-emerald-50 to-green-50 p-6 rounded-xl">
                                        <h3 className="flex items-center gap-2 text-xl font-semibold text-emerald-700 mb-4">
                                            <Utensils className="h-5 w-5"/>
                                            Traditional Dishes
                                        </h3>
                                        <div className="grid gap-4">
                                            <div className="bg-white/50 p-4 rounded-lg">
                                                <h4 className="font-semibold text-emerald-900 mb-2">Matzah Ball
                                                    Soup</h4>
                                                <p className="text-emerald-800">
                                                    Fluffy matzah dumplings in golden chicken broth - pure comfort
                                                    food!
                                                </p>
                                            </div>
                                            <div className="bg-white/50 p-4 rounded-lg">
                                                <h4 className="font-semibold text-emerald-900 mb-2">Charoset</h4>
                                                <p className="text-emerald-800">
                                                    Sweet paste of apples, nuts, and wine - symbolizes mortar used
                                                    by slaves
                                                </p>
                                            </div>
                                            <div className="bg-white/50 p-4 rounded-lg">
                                                <h4 className="font-semibold text-emerald-900 mb-2">Gefilte
                                                    Fish</h4>
                                                <p className="text-emerald-800">
                                                    Traditional fish patties - you either love it or... well, you
                                                    know 😉
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div>
                                    <div
                                        className="h-64 bg-cover bg-center rounded-xl mb-6"
                                        style={{
                                            backgroundImage:
                                                'url("https://cdn1.yhb.org.il/uploads/revivim1091.jpg")',
                                        }}
                                    />

                                    <div
                                        className="bg-gradient-to-br from-blue-50 to-indigo-50 p-6 rounded-xl mb-6">
                                        <h3 className="text-xl font-semibold text-blue-700 mb-4">
                                            What's Not Allowed?
                                        </h3>
                                        <p className="text-blue-800 mb-4">
                                            During Passover, we avoid "chametz" - anything made with leavened grain:
                                        </p>
                                        <div className="grid grid-cols-2 gap-4 text-blue-800">
                                            <div className="bg-white/50 p-3 rounded-lg">
                                                <p>• Bread</p>
                                                <p>• Pasta</p>
                                                <p>• Cereal</p>
                                            </div>
                                            <div className="bg-white/50 p-3 rounded-lg">
                                                <p>• Cookies</p>
                                                <p>• Beer</p>
                                                <p>• Most grains</p>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="bg-gradient-to-br from-purple-50 to-violet-50 p-6 rounded-xl">
                                        <h3 className="text-xl font-semibold text-purple-700 mb-4">
                                            Modern Passover Recipes
                                        </h3>
                                        <ul className="space-y-3 text-purple-800">
                                            <li>• Matzah pizza</li>
                                            <li>• Chocolate-covered matzah</li>
                                            <li>• Matzah granola</li>
                                            <li>• Passover brownies</li>
                                            <li>• Matzah lasagna</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
}

export default LearnJewish;