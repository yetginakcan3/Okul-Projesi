const { verifyToken } = require('../utils/jwt');
const Principal = require('../models/principal');
const Teacher = require('../models/teacher');
const Student = require('../models/student');
const jwt = require('jsonwebtoken');




const authorizePrincipal = (roles) => {
    return async (req, res, next) => {
        try {
            // Token'ı al
            const token = req.cookies ? req.cookies.Cookie_1: null;
            if (token) {
                // Token'ı doğrula
                jwt.verify(token, 'gizli kelime', async (err, decodedToken) => {
                    if (err) {
                        return res.status(401).json({ message: 'Geçersiz token.' });
                    }
                    
                    // Kullanıcıyı veritabanından çek
                    const user = await Principal.findByPk(decodedToken.id);
                    if (user) {
                        // Kullanıcının rolünü kontrol et
                        console.log("Kullanıcı Rolü:", user.role); // Kullanıcının rolünü konsolda görüntüle
                        console.log("Token:", token); // Alınan token'ı görüntüle
                        console.log("Decoded Token:", decodedToken); // Çözümlenmiş token'ı görüntüle
                        console.log("Kullanıcı:", user); // Kullanıcıyı görüntüle
                        console.log("Kullanıcı Rolü:", user ? user.role : 'Kullanıcı yok'); // Kullanıcı rolünü görüntüle
                        
                        // Kullanıcının rolü, izin verilen roller arasında mı?
                        if (roles.includes(user.role)) {
                            req.user = user; // Kullanıcıyı req objesine ekle
                            next(); // Bir sonraki middleware'e geç

                            
                        } else {
                            return res.status(403).json({ message: 'Erişim yetkisi yok.' });
                        }
                    } else {
                        return res.status(401).json({ message: 'Kullanıcı bulunamadı.' });
                    }

                   
                });
            } else {
                return res.status(401).json({ message: 'Token bulunamadı.' });
            }
        } catch (error) {
            console.error('Yetkilendirme hatası:', error); // Hata mesajını konsolda görüntüle
            return res.status(500).json({ message: 'Sunucu hatası.' });

            
        }
    };
};







const authorizeTeacher = (roles) => {
    return async (req, res, next) => {
        try {
            // Token'ı al
            const token = req.cookies ? req.cookies.Cookie_1: null;
            if (token) {
                // Token'ı doğrula
                jwt.verify(token, 'gizli kelime', async (err, decodedToken) => {
                    if (err) {
                        return res.status(401).json({ message: 'Geçersiz token.' });
                    }
                    
                    // Kullanıcıyı veritabanından çek
                    const user = await Teacher.findByPk(decodedToken.id);
                    if (user) {
                        // Kullanıcının rolünü kontrol et
                        console.log("Kullanıcı Rolü:", user.role); // Kullanıcının rolünü konsolda görüntüle
                        console.log("Token:", token); // Alınan token'ı görüntüle
                        console.log("Decoded Token:", decodedToken); // Çözümlenmiş token'ı görüntüle
                        console.log("Kullanıcı:", user); // Kullanıcıyı görüntüle
                        console.log("Kullanıcı Rolü:", user ? user.role : 'Kullanıcı yok'); // Kullanıcı rolünü görüntüle
                        
                        // Kullanıcının rolü, izin verilen roller arasında mı?
                        if (roles.includes(user.role)) {
                            req.user = user; // Kullanıcıyı req objesine ekle
                            next(); // Bir sonraki middleware'e geç

                            
                        } else {
                            return res.status(403).json({ message: 'Erişim yetkisi yok.' });
                        }
                    } else {
                        return res.status(401).json({ message: 'Kullanıcı bulunamadı.' });
                    }

                   
                });
            } else {
                return res.status(401).json({ message: 'Token bulunamadı.' });
            }
        } catch (error) {
            console.error('Yetkilendirme hatası:', error); // Hata mesajını konsolda görüntüle
            return res.status(500).json({ message: 'Sunucu hatası.' });

            
        }
    };
};

const authorizeStudent = (roles) => {
    return async (req, res, next) => {
        try {
            // Token'ı al
            const token = req.cookies ? req.cookies.Cookie_1: null;
            if (token) {
                // Token'ı doğrula
                jwt.verify(token, 'gizli kelime', async (err, decodedToken) => {
                    if (err) {
                        return res.status(401).json({ message: 'Geçersiz token.' });
                    }
                    
                    // Kullanıcıyı veritabanından çek
                    const user = await Student.findByPk(decodedToken.id);
                    if (user) {
                        // Kullanıcının rolünü kontrol et
                        console.log("Kullanıcı Rolü:", user.role); // Kullanıcının rolünü konsolda görüntüle
                        console.log("Token:", token); // Alınan token'ı görüntüle
                        console.log("Decoded Token:", decodedToken); // Çözümlenmiş token'ı görüntüle
                        console.log("Kullanıcı:", user); // Kullanıcıyı görüntüle
                        console.log("Kullanıcı Rolü:", user ? user.role : 'Kullanıcı yok'); // Kullanıcı rolünü görüntüle
                        
                        // Kullanıcının rolü, izin verilen roller arasında mı?
                        if (roles.includes(user.role)) {
                            req.user = user; // Kullanıcıyı req objesine ekle
                            next(); // Bir sonraki middleware'e geç

                            
                        } else {
                            return res.status(403).json({ message: 'Erişim yetkisi yok.' });
                        }
                    } else {
                        return res.status(401).json({ message: 'Kullanıcı bulunamadı.' });
                    }

                   
                });
            } else {
                return res.status(401).json({ message: 'Token bulunamadı.' });
            }
        } catch (error) {
            console.error('Yetkilendirme hatası:', error); // Hata mesajını konsolda görüntüle
            return res.status(500).json({ message: 'Sunucu hatası.' });

            
        }
    };
};

const authorizeGradeAccess = async (req, res, next) => {
    const { studentId } = req.params;
    const user = req.user;

    if (user instanceof Student) {
        if (user.id == studentId) {
            next();
        } else {
            return res.status(403).json({ message: 'Bu notları görme yetkiniz yok.' });
        }
    } else if (user instanceof Teacher) {
        if (user.id == req.body.teacherId) {
            next();
        } else {
            return res.status(403).json({ message: 'Bu notları yönetme yetkiniz yok.' });
        }
    } else if (user instanceof Principal) {
        next();
    } else {
        return res.status(403).json({ message: 'Yetkisiz erişim.' });
    }
};

module.exports = {
    authorizePrincipal,
    authorizeTeacher,
    authorizeStudent,
    authorizeGradeAccess
};
