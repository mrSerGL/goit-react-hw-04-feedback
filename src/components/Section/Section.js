import PropTypes from 'prop-types';
import css from './Section.module.css'

function Section({ title, children }) {
  return (
    <div className={css.section}>
      {title && <h2 className={css.sectionTitle}>{title}</h2>}
      {children}
    </div>
  );
}

Section.propTypes = {
  title: PropTypes.string,
  children: PropTypes.node,
};

export default Section;
